
//it is not a really a parallax, 
//but more or less have the same scroll requirement
//and it fits better with my web instead of doing something weird

let scrollPosition = 0; //actual focused panel
let startY = 0; // starting Y position for touch


window.onload = () => {
    //wait for the page to be totally loaded and update panels
    updatePanelsState();
    scrollTo(0, 0);
};

function handleScroll(event) {
    const PANELS = document.querySelectorAll(".my-panel");

    //cancel default scroll
    event.preventDefault();
    //add or subtract the actual index position
    scrollPosition += event.deltaY / 100;
    //limit scroll
    if (scrollPosition < 0) scrollPosition = 0;
    else if (scrollPosition >= PANELS.length) scrollPosition = PANELS.length - 1;

    //set view to the actual panel
    window.scrollTo({ top: PANELS[scrollPosition].offsetTop, });

    updatePanelsState();
}

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    const PANELS = document.querySelectorAll(".my-panel");
    //calculate the difference in touch position
    const deltaY = startY - event.changedTouches[0].clientY;

    //check if the movement is greater than the threshold
    if (deltaY > 0) scrollPosition += 1;
    else scrollPosition -= 1;

    //limit scroll
    if (scrollPosition < 0) scrollPosition = 0;
    else if (scrollPosition >= PANELS.length) scrollPosition = PANELS.length - 1;

    //set view to the actual panel
    window.scrollTo({ top: PANELS[scrollPosition].offsetTop, });

    updatePanelsState();
}

function updatePanelsState() {
    const PANELS = document.querySelectorAll(".my-panel");

    for (let i = 0; i < PANELS.length; i++) {
        let scale = Math.max(0.5, 1 - Math.abs(i - scrollPosition) * 0.3);
        let opacity = Math.max(0.5, 1 - Math.abs(i - scrollPosition) * 0.5);
        PANELS[i].style.transform = `scale(${scale})`;
        PANELS[i].style.opacity = opacity;
    }
}

window.addEventListener('wheel', handleScroll, { passive: false });
window.addEventListener('touchstart', handleTouchStart, { passive: false });
window.addEventListener('touchend', handleTouchEnd, { passive: false });