let scrollPosition = 0; //actual focused panel
let startHeight = 0; // starting Y position for touch

let parallaxLayers = [];

function initElements() {
    const CLOUD1 = "../../imgs/parallax-imgs/clouds-n1-b-g-main.png";
    const CLOUD2 = "../../imgs/parallax-imgs/clouds-n2-b-g-main.png";

    parallaxLayers[0] = document.getElementById("parallax-0");
    createLayerWithElements(1, CLOUD1);
    createLayerWithElements(2, CLOUD2);
}

function createLayerWithElements(layer, imgPath) {
    const PARALLAX_BG = document.getElementById("parallax-bg");
    parallaxLayers[layer] = document.createElement("div");
    parallaxLayers[layer].id = `parallax-${layer}`;
    parallaxLayers[layer].classList.add("parallax-layer");
    parallaxLayers[layer].style.zIndex = layer;
    PARALLAX_BG.appendChild(parallaxLayers[layer]);

    let aux;
    let posX, posY;
    for (let i = 0; i < 10; i++) {
        aux = document.createElement("img");
        parallaxLayers[layer].appendChild(aux);
        aux.src = imgPath;
        posY = Math.random() * 10 - 5;
        aux.style.transform = `translateY(${posY}%)`;
    }
}

function handleScroll(event) {
    scrollPosition += event.deltaY;

    let maxScroll = document.body.scrollHeight-scrollPosition;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    else if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }
    for (let i = 0; i < parallaxLayers.length; i++) {
        const elements = parallaxLayers[i].children;
        for (let j = 0; j < elements.length; j++) {
            elements[j].style.transform = `translateY(${scrollPosition * i * 0.15}px)`;
        }
    }
}

window.addEventListener('wheel', handleScroll, { passive: false });

initElements();

window.onload = () => {
    scrollTo(0, 0);
    scrollPosition = 0;
    startHeight = window.innerHeight;
};