// Volver arriba del todo al refrescar la página
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    updateActiveMenu();
});

// Menú scrolleo
const sections = document.querySelectorAll('#visual-info > .container');
const menuItems = document.querySelectorAll('.menu-info li');

function updateActiveMenu() {
    let current = '';
    const scrollPosition = window.scrollY + 300;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        const className = item.classList[0];
        
        if (current === 'visual-' + className) {
            item.classList.add('active');
        }
    });
}

// click para navegar a las secciones
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const className = item.classList[0];
        
        // ir al inicio de la página cuando estás en otra sección
        if (className === 'seleccion') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetSection = document.getElementById('visual-' + className);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

window.addEventListener('scroll', updateActiveMenu);