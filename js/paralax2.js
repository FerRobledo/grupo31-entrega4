
const marcoImagen = document.getElementById("marcoImagen");
let imgContent1 = document.getElementById("imgContent1");
let imgContent2 = document.getElementById("imgContent2");
let imgContent3 = document.getElementById("imgContent3");
let imgContent4 = document.getElementById("imgContent4");
const imagenes = [
    imgContent1,
    imgContent2,
    imgContent3,
    imgContent4
];

let indiceActual = 0; // Imagen inicial
// Cambiar imagen cada 3s
setInterval(() => {
    // Oculta todas las imágenes
    imagenes.forEach((img) => {
        img.style.display = "none";
    });

    // Muestra solo la imagen actual
    imagenes[indiceActual].style.display = "block";

    // Avanza al siguiente índice
    indiceActual = (indiceActual + 1) % imagenes.length;
}, 3000);

let muñeco4 = document.getElementById("muñeco4");
let muñeco5 = document.getElementById("muñeco5");

scrollInit = 500; // Inicio de efecto Paralax

window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    let scrollPosition = window.scrollY - scrollInit;
    
    
    mover(muñeco5, 683, -300, scrollPosition, 0.9);
    mover(muñeco4, -200, 650, scrollPosition, 0.4);
    mover(marcoImagen, 0, 52, scrollPosition, -0.1)


})

function mover(element, xInicial, yInicial, scrollPosition, velocidad){
    element.style.transform = `translate(${xInicial}px, ${-(yInicial+(scrollPosition*velocidad))}px)`;
}

