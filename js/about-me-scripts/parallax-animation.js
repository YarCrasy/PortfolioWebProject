let scrollPosition = 0; //actual focused panel
let startY = 0; // starting Y position for touch

function initElements() {
    const CLOUD1 = "../../imgs/parallax-imgs/clouds-n1-b-g-main.png";
    const CLOUD2 = "../../imgs/parallax-imgs/clouds-n2-b-g-main.png";
    const MOON = "../../imgs/parallax-imgs/moon3.png";

}

function createElementAtLayer(layer, imgPath) {
    const PARALLAX_BG = document.getElementById("parallax-bg");
    let parallaxLayer = document.createElement("div");
    parallaxLayer.id = `parallax-${layer}`;
    parallaxLayer.classList.add("parallax-layer");
    PARALLAX_BG.appendChild(parallaxLayer);

    let aux;
    let posX, posY;
    for (let i = 0; i < 100; i++) {
        aux = document.createElement("img");
        parallaxLayer.appendChild(aux);
        aux.src = imgPath;
        posX = Math.random();
        posY = Math.random();
        aux.style.transform = `translateX(${posX * 1}%)`;
        aux.style.transform = `translateY(${posY * 500}%)`;
    }
}

function handleScroll(event) {

}


window.addEventListener('wheel', handleScroll, { passive: false });

initElements();

window.onload = () => {
    scrollTo(0, 0);
    scrollPosition = 0;
    startY = 0;
};