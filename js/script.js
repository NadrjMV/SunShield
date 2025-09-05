// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Efeito do header mudando de cor quando rola a página
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Inicializando a biblioteca de animação AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100, // Um pouco mais de offset pra animação ficar mais suave
    });

    // Lógica para o carrossel infinito de parceiros
    const scroller = document.querySelector('.partners-scroller');
    if (scroller) {
        const track = scroller.querySelector('.scroller-track');
        const logos = Array.from(track.children);
        
        // Duplicando os logos pra dar o efeito de loop contínuo
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });
    }

});