
//it is not a really a parallax, 
//but more or less have the same scroll requirement
//and it fits better with my web instead of doing something weird

const PANELS = document.querySelectorAll(".my-panel");
let scrollPosition = 0; // Controlar la posición del scroll


window.onload = () => {
    //Reset position on load
    updatePanelsPosition();
};

function handleScroll(event) {
    event.preventDefault();

    scrollPosition += event.deltaY / 800;

    // Limitar la posición del scroll
    scrollPosition = Math.max(0, Math.min(PANELS.length-1, scrollPosition));

    updatePanelsPosition();
}

function updatePanelsPosition() {
    PANELS.forEach((panel, index) => {
        // Calculamos el desplazamiento de cada pestaña
        let offset = (index - scrollPosition); // 100px de separación entre pestañas
        let scale = Math.max(0.5, 0.9 - Math.abs(index - scrollPosition) * 0.5); // Escala para reducir las pestañas cuando se apilan
        let opacity = Math.max(0.5, 1 - Math.abs(index - scrollPosition) * 0.1); // Opacidad para las pestañas cuando se alejan

        panel.style.transform = `translateY(${offset}px) scale(${scale})`;
        panel.style.opacity = opacity; // Añadimos la opacidad para un efecto más suave
    });
}

// Detectar el evento de desplazamiento
window.addEventListener('wheel', handleScroll);
