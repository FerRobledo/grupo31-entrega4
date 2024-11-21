
const marcoImagen = document.getElementById("marcoImagen");
const imagenes = [
    "../images/imgContent1.png",
    "../images/imgContent2.png",
    "../images/imgContent3.png",
    "../images/imgContent4.png"
];

let indiceActual = 0; // Imagen inicial

function cargarImagenes() {
    // Devuelve una promesa que se resuelve cuando todas las imágenes se han cargado
    return Promise.all(
        imagenes.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => reject(new Error(`Error al cargar la imagen: ${src}`));
            });
        })
    );
}

function iniciarCambioImagenes() {
    const marcoImagen = document.getElementById("marcoImagen");

    // Cambiar imagen cada 3s
    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        marcoImagen.style.backgroundImage = `url("${imagenes[indiceActual]}")`;
    }, 3000);
}

// Asegúrate de que todas las imágenes se carguen antes de iniciar
window.onload = () => {
    cargarImagenes()
        .then(() => {
            iniciarCambioImagenes();
        })
        .catch((error) => {
            console.error("Error al cargar imágenes:", error);
        });
};

let muñeco4 = document.getElementById("muñeco4");
let muñeco5 = document.getElementById("muñeco5");

scrollInit = 500; // Inicio de efecto Paralax

window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    let scrollPosition = window.scrollY - scrollInit;
    
    
    mover(muñeco5, 683, -300, scrollPosition, 0.9);
    mover(muñeco4, -200, 650, scrollPosition, 0.4);
    mover(marcoImagen, 136, 72, scrollPosition, -0.1)


})

function mover(element, xInicial, yInicial, scrollPosition, velocidad){
    element.style.transform = `translate(${xInicial}px, ${-(yInicial+(scrollPosition*velocidad))}px)`;
}

