
//it is not a really a parallax, 
//but more or less have the same scroll requirement
//and it fits better with my web instead of doing something weird

let scrollPosition = 0; //actual focused panel

window.onload = () => {
    //wait for the page to be totally loaded and update panels
    updatePanelsPosition();
};

function handleScroll(event) {
    const PANELS = document.querySelectorAll(".my-panel");

    //cancel default scroll
    event.preventDefault();
    //add or substract the actual index position
    scrollPosition += event.deltaY / 100;
    //limit scroll
    scrollPosition = Math.max(0, Math.min(PANELS.length - 1, scrollPosition));
    window.scrollTo({ top: PANELS[scrollPosition].offsetTop, });

    updatePanelsPosition();
}

function updatePanelsPosition() {
    const PANELS = document.querySelectorAll(".my-panel");

    for (let i = 0; i < PANELS.length; i++) {
        let scale = Math.max(0.5, 1 - Math.abs(i - scrollPosition) * 0.3);
        let opacity = Math.max(0.5, 1 - Math.abs(i - scrollPosition) * 0.5);
        PANELS[i].style.transform = `scale(${scale})`;
        PANELS[i].style.opacity = opacity;
    }
}

window.addEventListener('wheel', handleScroll, { passive: false });
