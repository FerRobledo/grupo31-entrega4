const contenedor = document.querySelector('.terceraParte');
const image = document.getElementById('parte3-muniecos');
const movementFactor = 0.1; // Factor para reducir el movimiento
const rotationFactor = 0.3; // Factor para ajustar la rotación

// Bandera para controlar si el mouse está dentro del contenedor
let isMouseInside = false;

// Evento para detectar cuando el mouse entra en el contenedor
contenedor.addEventListener('mouseenter', () => {
    isMouseInside = true;
});

// Evento para detectar cuando el mouse sale del contenedor
contenedor.addEventListener('mouseleave', () => {
    isMouseInside = false;
    // Resetear la transformación de la imagen
    image.style.transform = 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)';
});

// Evento para mover la imagen basado en la posición del mouse
document.addEventListener('mousemove', (event) => {
    if (!isMouseInside) return;

    const rect = contenedor.getBoundingClientRect();

    const mouseX = event.clientX - rect.left; 
    const mouseY = event.clientY - rect.top;

    const containerWidth = rect.width;
    const containerHeight = rect.height;

    // Calcular el offset para el movimiento
    const offsetX = (containerWidth / 2 - mouseX) * movementFactor;
    const offsetY = (containerHeight / 2 - mouseY) * movementFactor;

    // Calcular la rotación en función de la posición del mouse
    const rotateX = ((mouseY - containerHeight / 2) / containerHeight) * rotationFactor * 100;
    const rotateY = ((mouseX - containerWidth / 2) / containerWidth) * rotationFactor * -100;

    // Aplicar las transformaciones
    image.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
