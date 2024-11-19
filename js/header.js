let logo = document.getElementById("logo");
let gradient = document.getElementById("gradient");
let header = document.querySelector("header");


// Medidas iniciales y finales del logo
const initialWidth = 560;
const initialHeight = 320;
const finalWidth = 150;
const finalHeight = 86;

// Ubicacion inicial del grandient del header
let topInicialGradient = -200;
let topFinalGradient = 0;

// Ubicacion inicial y final del header
let topInicial = 55;
let topFinal = 8;

// Limite de scroll
const maxScroll = 300

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let scrollFactor = Math.min(scrollY / maxScroll, 1);

    // Calculo para determinar la nueva ubicacion y tamaño del logo y gradient segun el scroll
    let newWidth = initialWidth - (initialWidth - finalWidth) * scrollFactor;
    let newHeight = initialHeight - (initialHeight - finalHeight) * scrollFactor;
    let newTop = topInicial - (topInicial - topFinal) * scrollFactor;
    let newGradient = topInicialGradient - (topInicialGradient - topFinalGradient) * scrollFactor;


    // Aplicacion de estilos con los nuevos valores
    logo.style.width = `${newWidth}px`;
    logo.style.height = `${newHeight}px`;
    logo.style.top = `${newTop}px`;
    gradient.style.transform = `translateY(${newGradient}px)`
});
