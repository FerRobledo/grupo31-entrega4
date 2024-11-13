let logo = document.getElementById("logo");
let gradient = document.getElementById("gradient");

const initialWidth = 560;
const initialHeight = 320;
const finalWidth = 150;
const finalHeight = 86;

let topInicialGradient = -200;
let topFinalGradient = 0;

let topInicial = 55;
let topFinal = 8;

const maxScroll = 300

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let scrollFactor = Math.min(scrollY / maxScroll, 1);

    let newWidth = initialWidth - (initialWidth - finalWidth) * scrollFactor;
    let newHeight = initialHeight - (initialHeight - finalHeight) * scrollFactor;
    let newTop = topInicial - (topInicial - topFinal) * scrollFactor;
    let newGradient = topInicialGradient - (topInicialGradient - topFinalGradient) * scrollFactor;

    logo.style.width = `${newWidth}px`;
    logo.style.height = `${newHeight}px`;
    logo.style.top = `${newTop}px`;
    gradient.style.transform = `translateY(${newGradient}px)`
});
