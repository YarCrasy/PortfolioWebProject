let scrollPosition = 0; //actual focused panel
let startY = 0; // starting Y position for touch

function initElements() {
    const CLOUD1 = "../../imgs/parallax-imgs/clouds-n1-b-g-main.png";
    const CLOUD2 = "../../imgs/parallax-imgs/clouds-n2-b-g-main.png";
    const MOON = "../../imgs/parallax-imgs/moon3.png";

    const PARALLAX_1 = document.getElementById("parallax-1");
    
    let aux1, aux2;
    for(let i = 0; i < 10000; i++){
        aux1 = document.createElement("img");
        aux1.src = CLOUD1;
        aux1.classList.add("parallax-1");
        aux1.style.transform = `translate(${(Math.random() - 1) * 1}vw, ${(Math.random()) * 100}vh)`;
        PARALLAX_1.appendChild(aux1);

        aux2 = document.createElement("img");
        aux2.src = CLOUD2;
        aux2.classList.add("parallax-1");
        aux2.style.transform = `translate(${(Math.random() - 1) * 1}vw, ${(Math.random() - 1) * 1}vh)`;
        PARALLAX_1.appendChild(aux2);
    }

}

function handleScroll(event) {
    event.preventDefault();

}

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {

}


window.addEventListener('wheel', handleScroll, { passive: false });
window.addEventListener('touchstart', handleTouchStart, { passive: false });
window.addEventListener('touchend', handleTouchEnd, { passive: false });

initElements();

window.onload = () => {
    scrollTo(0, 0);
    scrollPosition = 0;
    startY = 0;
};