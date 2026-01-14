const creditsData = {
    '2026': `
        <p style="padding-left: 0rem">Equipo Muestra</p>
        <p>Soledad&nbsp;Manzano</p>
        <p>Andrea&nbsp;Torralba</p>
        <p>Ibai&nbsp;Astier</p>
        <p>Lola&nbsp;Marín</p>
        <p>Carmen&nbsp;Carranza</p>
        <p>Eugenia&nbsp;Rabanaque</p>
        <p>Pau&nbsp;Bosque</p>
        <p>Lucas&nbsp;Pérez</p>
    `,
    '2025': `
        <p style="padding-left: 0rem">Equipo Muestra</p>
        <p>Soledad&nbsp;Manzano</p>
        <p>Andrea&nbsp;Torralba</p>
        <p>Ibai&nbsp;Astier</p>
        <p>Lola&nbsp;Marín</p>
        <p style="padding-left: 0; margin-top: 1rem">Fotografías</p>
        <p>Joan</p>
        <p style="padding-left: 0; margin-top: 1rem">Asistencia</p>
        <p>130 personas</p>
    `,
    '2024': `
        <p style="padding-left: 0rem">Equipo Muestra</p>
        <p>Soledad&nbsp;Manzano</p>
        <p>Andrea&nbsp;Torralba</p>
        <p>Ibai&nbsp;Astier</p>
        <p style="padding-left: 0; margin-top: 1rem">Asistencia</p>
        <p>75 personas</p>
    `
};

function showCredits(year, event) {
    const button = event.target.closest('button');
    const existing = document.querySelector(`.credits-popup[data-year="${year}"]`);
    if (existing) {
        document.body.removeChild(existing);
        button.textContent = 'créditos';
        window.removeEventListener('scroll', existing._updatePosition, true);
        return;
    }
    if (button.textContent.includes('×')) {
        const popup = document.querySelector(`.credits-popup[data-year="${year}"]`);
        if (popup) {
            document.body.removeChild(popup);
            window.removeEventListener('scroll', popup._updatePosition, true);
        }
        button.textContent = 'créditos';
        return;
    }
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.backgroundColor = '#bbbbbb';
    div.style.border = '0';
    div.style.borderRadius = '8px';
    div.style.padding = '10px';
    div.style.zIndex = '1000';
    div.className = 'credits-popup';
    div.setAttribute('data-year', year);
    div.innerHTML = creditsData[year];
    
    const updatePosition = () => {
        const rect = button.getBoundingClientRect();
        div.style.top = rect.bottom + 'px';
        div.style.left = rect.left + 'px';
        
        // Use requestAnimationFrame to ensure DOM is updated before checking bounds
        requestAnimationFrame(() => {
            const divRect = div.getBoundingClientRect();
            if (divRect.right > window.innerWidth) {
                const newLeft = rect.right - divRect.width;
                div.style.left = newLeft + 'px';
            }
        });
    };
    
    document.body.appendChild(div);
    button.textContent = 'créditos ×';
    updatePosition();
    div._updatePosition = updatePosition;
    window.addEventListener('scroll', updatePosition, true);
}

function showCartel(year, event) {
    const button = event.target.closest('button');
    const imgMini = button.querySelector('img');
    const rect = imgMini.getBoundingClientRect();
    const src = `./img/Cartel_${year}.png`;
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.style.transition = 'background-color 0.2s ease';
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.top = rect.top + 'px';
    img.style.left = rect.left + 'px';
    img.style.width = rect.width + 'px';
    img.style.height = rect.height + 'px';
    img.style.transition = 'all 0.3s ease';
    modal.appendChild(img);
    modal.onclick = () => document.body.removeChild(modal);
    document.body.appendChild(modal);
    // Trigger animation
    setTimeout(() => {
        modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        if (window.innerHeight > window.innerWidth) {
            img.style.width = '90%';
            img.style.height = 'auto';
        } else {
            img.style.height = '90%';
            img.style.width = 'auto';
        }
    }, 10);
}

// Generar mapa de ponentes desde CSV
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        const values = [];
        let currentValue = '';
        let insideQuotes = false;
        
        for (let j = 0; j < lines[i].length; j++) {
            const char = lines[i][j];
            
            if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                values.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        values.push(currentValue.trim());
        
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });
        data.push(row);
    }
    
    return data;
}

const ponentesMap = {};
const proyectos = parseCSV(PROYECTOS_CSV);
proyectos.forEach(proyecto => {
    const imageName = proyecto.imagen.split('/').pop();
    ponentesMap[imageName] = proyecto.nombre;
});

let tooltipEl = null;
function showPonenteTooltip(e) {
    const src = e.target.getAttribute('src') || '';
    const file = src.split('/').pop();
    const name = ponentesMap[file] || 'Ponente';
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.className = 'ponente-tooltip';
        document.body.appendChild(tooltipEl);
    }
    tooltipEl.textContent = name;
    tooltipEl.style.top = e.clientY + 12 + 'px';
    tooltipEl.style.left = e.clientX + 12 + 'px';
    tooltipEl.style.display = 'block';
}
function movePonenteTooltip(e) {
    if (!tooltipEl) return;
    tooltipEl.style.top = e.clientY + 12 + 'px';
    tooltipEl.style.left = e.clientX + 12 + 'px';
}
function hidePonenteTooltip() {
    if (tooltipEl) tooltipEl.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.item-visual').forEach(img => {
        img.addEventListener('mouseenter', showPonenteTooltip);
        img.addEventListener('mousemove', movePonenteTooltip);
        img.addEventListener('mouseleave', hidePonenteTooltip);
    });
    const vLine = document.getElementById('vertical-line');
    const h2024 = document.getElementById('horizontal-2024');
    const setVLineHeight = () => {
        if (!vLine || !h2024) return;
        const vTop = vLine.getBoundingClientRect().top;
        const hTop = h2024.getBoundingClientRect().top;
        vLine.style.height = `${hTop - vTop}px`;
    };
    setVLineHeight();
    window.addEventListener('resize', setVLineHeight);
});

