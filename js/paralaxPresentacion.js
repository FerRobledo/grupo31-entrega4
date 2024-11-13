// Seleccionamos todos los elementos con la clase 'paralax-presentacion'
const parallaxElements = document.querySelectorAll('.paralax-presentacion');

// Agregamos un evento de scroll a la ventana
window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    const scrollPosition = window.scrollY;

    // Iteramos sobre cada elemento de parallax para modificar su posición
    parallaxElements.forEach((element) => {
        // Obtenemos el valor del z-index del elemento (si no tiene, se asume un valor por defecto de 0)
        const zIndex = parseInt(window.getComputedStyle(element).zIndex) || 0;

        // Ajustamos el factor de movimiento según el desplazamiento y el z-index
        const moveFactor = scrollPosition * (0.3 - (zIndex * 0.1)); // Menos movimiento para z-index más alto

        // Aplicamos una transformación de desplazamiento en el eje Y hacia abajo
        element.style.transform = `translateY(-${moveFactor}px)`; // Movimiento hacia abajo
    });
    
    // sombra1.style.transform =  `scaleX(-${scrollPosition*20}px)`
});
