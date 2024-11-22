document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('modelViewer');
    const sextaParte = document.querySelector('.sextaParte');

    sextaParte.addEventListener('mousemove', (event) => {
        const { left, top, width, height } = sextaParte.getBoundingClientRect();

        // Calcula la posición del mouse relativa al contenedor
        const x = (event.clientX - left) / width; // Normaliza entre 0 y 1
        const y = (event.clientY - top) / height; // Normaliza entre 0 y 1

        // Convierte las posiciones normalizadas en ángulos para la rotación
        const anguloHorizontal = (x * 2 - 1) * Math.PI; // Normaliza entre -1 y 1 y convierte a radianes
        const anguloVertical = (y * 2 - 1) * Math.PI; // Limita el rango vertical

        // Ajusta la cámara del model-viewer
        modelViewer.cameraOrbit = `${anguloHorizontal}rad -${anguloVertical}rad`;
    });
});
