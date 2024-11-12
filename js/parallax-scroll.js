
//it is not a really a parallax, 
//but more or less have the same scroll requirement
//and it fits better with my web instead of doing something weird

const PANELS = document.querySelectorAll(".my-panel");
let scrollPosition = 0; // Controlar la posición del scroll


window.onload = () => {
    //wait for the page to be totally loaded and update panels
    updatePanelsPosition();
};

function handleScroll(event) {
    event.preventDefault();

    scrollPosition += event.deltaY / 700; //detect every scroll tick, in this case every 7 tick reach a new panel

    //limit scroll
    scrollPosition = Math.max(0, Math.min(PANELS.length - 1, scrollPosition));

    updatePanelsPosition();
}

function updatePanelsPosition() {
    PANELS.forEach((panel, index) => {
        let scale = Math.max(0.5, 0.9 - Math.abs(index - scrollPosition) * 0.5);
        let opacity = Math.max(0.5, 1 - Math.abs(index - scrollPosition) * 0.5);

        panel.style.transform = `translateY(${0}px) scale(${scale})`;
        panel.style.opacity = opacity;
    });
}

window.addEventListener('wheel', handleScroll);
