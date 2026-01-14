// Cargar datos desde CSV
let participantesPorAño = {};
let añoFiltroActivo = null;
let categoriaFiltroActiva = null;

// Función para parsear CSV
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = [];
        let currentValue = '';
        let insideQuotes = false;
        
        for (let char of lines[i]) {
            if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                values.push(currentValue);
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        values.push(currentValue);
        
        const row = {};
        headers.forEach((header, index) => {
            row[header.trim()] = values[index]?.trim() || '';
        });
        data.push(row);
    }
    
    return data;
}

// Cargar y organizar datos por año
async function cargarDatos() {
    try {
        const response = await fetch('../data/proyectos.csv');
        const csvText = await response.text();
        const proyectos = parseCSV(csvText);
        
        // Organizar por año
        participantesPorAño = {};
        proyectos.forEach(proyecto => {
            const año = proyecto.año;
            if (!participantesPorAño[año]) {
                participantesPorAño[año] = [];
            }
            participantesPorAño[año].push({
                nombre: proyecto.nombre,
                proyecto: proyecto.proyecto,
                categoria: proyecto.categoria,
                descripcion: proyecto.descripcion,
                imagen: proyecto.imagen
            });
        });
        
        // Renderizar después de cargar
        renderizarAccordion();
    } catch (error) {
        console.error('Error cargando datos:', error);
    }
}

// Filtrar por año
function filtrarPorAño(año) {
    añoFiltroActivo = (añoFiltroActivo === año) ? null : año;
    categoriaFiltroActiva = null;
    renderizarAccordion();
}

// Filtrar por categoría
function filtrarPorCategoria(categoria) {
    categoriaFiltroActiva = (categoriaFiltroActiva === categoria) ? null : categoria;
    añoFiltroActivo = null;
    renderizarAccordion();
}

// Crear acordeones
function renderizarAccordion() {
    const accordion = document.getElementById('accordionFlushExample');
    accordion.innerHTML = '';

    // Construir lista de participantes con años
    let participantesAMostrar = [];
    Object.entries(participantesPorAño)
        .sort(([añoA], [añoB]) => añoB - añoA)
        .forEach(([año, lista]) => {
            lista.forEach(p => {
                participantesAMostrar.push({ ...p, año });
            });
        });

    // Si hay filtro activo, reordenar
    if (añoFiltroActivo) {
        const delAñoSeleccionado = participantesAMostrar.filter(p => p.año == añoFiltroActivo);
        const delOtrosAños = participantesAMostrar.filter(p => p.año != añoFiltroActivo);
        participantesAMostrar = delAñoSeleccionado.concat(delOtrosAños);
    }
    
    if (categoriaFiltroActiva) {
        const delCategoriaSeleccionada = participantesAMostrar.filter(p => p.categoria.includes(categoriaFiltroActiva));
        const delOtrasCategorias = participantesAMostrar.filter(p => !p.categoria.includes(categoriaFiltroActiva));
        participantesAMostrar = delCategoriaSeleccionada.concat(delOtrasCategorias);
    }

    participantesAMostrar.forEach((participante, index) => {
        const collapseId = `flush-collapse${index}`;
        const esOtroAño = añoFiltroActivo && participante.año != añoFiltroActivo;
        const esOtraCategoria = categoriaFiltroActiva && !participante.categoria.includes(categoriaFiltroActiva);
        const estaDeshabilitado = esOtroAño || esOtraCategoria;
        
        const template = document.getElementById('accordion-item-imagen-template');
        const accordionItem = template.content.cloneNode(true);
        
        // Establecer clase si está deshabilitado
        const itemDiv = accordionItem.querySelector('.accordion-item');
        if (estaDeshabilitado) {
            itemDiv.classList.add('acordeon-deshabilitado');
            
            // Agregar click para activar este item específico
            itemDiv.addEventListener('click', (e) => {
                if (!e.target.classList.contains('año-filtrable') && !e.target.classList.contains('categoria-filtrable')) {
                    itemDiv.classList.remove('acordeon-deshabilitado');
                }
            });
        }
        
        // Rellenar datos
        accordionItem.querySelector('.col-ponente').textContent = participante.nombre;
        accordionItem.querySelector('.col-proyecto').textContent = participante.proyecto;
        accordionItem.querySelector('.col-año').textContent = participante.año;
        
        // Para categorías múltiples, crear spans individuales clickeables
        const categoriaElement = accordionItem.querySelector('.col-categoria');
        categoriaElement.innerHTML = ''; // Limpiar contenido
        const categorias = participante.categoria.split(',').map(c => c.trim());
        categorias.forEach((cat, idx) => {
            const span = document.createElement('span');
            span.textContent = cat;
            span.classList.add('categoria-filtrable');
            categoriaElement.appendChild(span);
            if (idx < categorias.length - 1) {
                categoriaElement.appendChild(document.createTextNode(', '));
            }
        });
        
        accordionItem.querySelector('.texto-descripcion').textContent = participante.descripcion;
        accordionItem.querySelector('.imagen-proyecto').src = participante.imagen;
        
        // Configurar atributos del accordion
        const button = accordionItem.querySelector('.accordion-button');
        const collapseDiv = accordionItem.querySelector('.accordion-collapse');
        button.setAttribute('data-bs-target', `#${collapseId}`);
        button.setAttribute('aria-controls', collapseId);
        collapseDiv.setAttribute('id', collapseId);
        
        // Detectar cuando se cierra el acordeón para restaurar el gris
        collapseDiv.addEventListener('hidden.bs.collapse', () => {
            if (estaDeshabilitado && !itemDiv.classList.contains('acordeon-deshabilitado')) {
                itemDiv.classList.add('acordeon-deshabilitado');
            }
        });
        
        accordion.appendChild(accordionItem);
    });

    // Agregar event listeners a los años clickeables
    document.querySelectorAll('.año-filtrable').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            filtrarPorAño(el.textContent);
        });
    });
    
    // Agregar event listeners a las categorías clickeables
    document.querySelectorAll('.categoria-filtrable').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            filtrarPorCategoria(el.textContent);
        });
    });
}

// Cargar datos al inicio
cargarDatos();