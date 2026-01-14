// ESTRUCTURA DE PARTICIPANTES POR AÑO
const participantesPorAño = {
    // Aquí irán 2026, 2027, etc.
    2025: [
        { nombre: "Álvaro Navarrete", proyecto: "El inicio del producto", categoria: "Investigación", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_01_0_portada.jpg" },
        { nombre: "Marta López", proyecto: "Legormiti", categoria: "Experimental", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_02_0_portada.jpg" },
        { nombre: "Pau Bosque", proyecto: "Housse", categoria: "Gráfico", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_03_0_portada.jpg" },
        { nombre: "Lucía Acedo", proyecto: "Por qué hay que reírse de uno mismo de vez en cuando", categoria: "Experimental", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_04_0_portada.jpg" },
        { nombre: "Carlos Cuaresma", proyecto: "Chopvolt", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_05_0_portada.jpg" },
        { nombre: "Mar García", proyecto: "Coxal", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_06_0_portada.jpg" },
        { nombre: "Miguel González", proyecto: "Ava", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_07_0_portada.jpg" },
        { 
            nombre: "Andrea Torralba", 
            proyecto: "Contenedor Primavera Sound", 
            categoria: "Investigación",
            descripcion: "Proyecto de investigación aplicando la metodología de Diseño Centrado en el Usuario (DCU) para el desarrollo de un contenedor de basura para el Primavera Sound Festival",
            imagen: "../img/2025_08_0_portada.jpg"
        },
        { nombre: "Guillermo Fernández, Mateo Magaz", proyecto: "White cane (skane)", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_09_0_portada.jpg" },
        { nombre: "Curro Claret", proyecto: "London Bridge, Taller niños superhéroes, Arrels - Estudiantes de Elisava", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2025_10_0_portada.jpg" }
    ],
    2024: [
        { nombre: "Teresa Carpio", proyecto: "BLASTIC", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_01_0_portada.jpg" },
        { 
            nombre: "Amelia González", 
            proyecto: "Lámpara 2111", 
            categoria: "Producto",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            imagen: "../img/2024_02_0_portada.jpg"
        },
        { nombre: "María León", proyecto: "Cuento inclusivo", categoria: "Gráfico", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_03_0_portada.jpg" },
        { nombre: "Lola Marín", proyecto: "SampleMusic", categoria: "Experimental", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_04_0_portada.jpg" },
        { 
            nombre: "Ibai Astier", 
            proyecto: "Catálogo de Flores y Plantas", 
            categoria: "Gráfico",
            descripcion: "El Catálogo de Flores y el Catálogo de Plantas fueron dos proyectos encargados por la floristería PANAME, con el objetivo de reforzar la comunidad en torno a la floristería. Se elaboraron dos catálogos funcionales que, en lugar de imágenes, contenían dibujos realizados por cada uno de los 50 participantes. ",
            imagen: "../img/2024_05_0_portada.jpg"
        },
        { nombre: "Blanca Crespí", proyecto: "Del render a lo físico", categoria: "Experimental", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_06_0_portada.jpg" },
        { nombre: "Víctor Vegabascones", proyecto: "aPeso", categoria: "Investigación", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_07_0_portada.jpg" },
        { nombre: "Mathías Meneses", proyecto: "NAIA", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_08_0_portada.jpg" },
        { nombre: "Sofía Ruíz", proyecto: "Taburete UOVO", categoria: "Producto", descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla con.", imagen: "../img/2024_09_0_portada.jpg" }
    ]
};

let añoFiltroActivo = null;
let categoriaFiltroActiva = null;

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

// Renderizar inicial
renderizarAccordion();