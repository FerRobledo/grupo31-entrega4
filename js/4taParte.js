const imagenesParte4 = [
    'images/0.png',
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
];

const cambioImagenes = document.getElementById('cambioImagenes');
const contenedorCuartaParte = document.querySelector(".cuartaParte");

// Configurar valores para determinar cuándo cambiar de imagen
const scrollInit4 = contenedorCuartaParte.offsetTop; // Posición inicial del scroll
const scrollIntervalo = 400; // Cantidad de píxeles de desplazamiento para cambiar de imagen
const colIzq = document.querySelector(".col-izq-img");

window.addEventListener("scroll", function () {
    const rect = contenedorCuartaParte.getBoundingClientRect();
    const scrollPosition4 = window.scrollY - scrollInit4;

    // Solo realizar acciones si hemos pasado el punto inicial
    if (scrollPosition4 >= 0 && scrollPosition4 <= (contenedorCuartaParte.scrollHeight - window.innerHeight)) {
        // Calcular el índice de la imagen a mostrar
        const indice = Math.floor(scrollPosition4 / scrollIntervalo);
        cambioImagenes.style.position = "fixed";
        cambioImagenes.style.top = "300px"; // Ajusta la posición según sea necesario

        // Verificar si el índice está dentro del rango del arreglo
        if (indice >= 0 && indice < imagenesParte4.length) {
            cambioImagenes.src = imagenesParte4[indice]; // Cambiar la imagen
        }
    } else {
        cambioImagenes.style.position = "absolute";
        cambioImagenes.style.top = "0"; // Restablece la posición
    }
});
