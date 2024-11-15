
const marcoImagen = document.getElementById("marcoImagen");
const imagenes = [
    "../images/imgContent1.png",
    "../images/imgContent2.png",
    "../images/imgContent3.png",
    "../images/imgContent4.png"
];

let indiceActual = 0;

setInterval(() => {
indiceActual = (indiceActual + 1) % imagenes.length;
marcoImagen.style.backgroundImage = `url("${imagenes[indiceActual]}")`;
}, 3000);

let muñeco4 = document.getElementById("muñeco4");
let muñeco5 = document.getElementById("muñeco5");

scrollInit = 1600;

window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    let scrollPosition = window.scrollY - scrollInit;
    
    mover(muñeco5, 683, -300, scrollPosition, 0.9);
    mover(muñeco4, -62, 450, scrollPosition, 0.4);
    
})

function mover(element, xInicial, yInicial, scrollPosition, velocidad){
    element.style.transform = `translate(${xInicial}px, ${-(yInicial+(scrollPosition*velocidad))}px)`;
}

