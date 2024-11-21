scrollInitParte5 = 8400; // Inicio de efecto Paralax

let muniecoParte5 = document.getElementById("muniecoParte5");
let video = document.querySelector(".videoNumberBlocks");

window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    let scrollPositionParte5 = window.scrollY - scrollInitParte5;
    
    moverParte5(muniecoParte5, scrollPositionParte5, 0.9);
    moverParte5(video, scrollPositionParte5, -0.1)
})

function moverParte5(element, scrollPositionParte5, velocidad){
    element.style.transform = `translateY(${-((scrollPositionParte5*velocidad))}px)`;
}