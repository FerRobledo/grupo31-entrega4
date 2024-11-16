const contenedor = document.querySelector('.terceraParte');
        const image = document.getElementById('3raParte-muniecos');
        const movementFactor = 0.08; // Factor para reducir el movimiento

        document.addEventListener('mousemove', (event) => {
            const rect = contenedor.getBoundingClientRect();

            const mouseX = event.clientX - rect.left; 
            const mouseY = event.clientY - rect.top;

            const containerWidth = rect.width;
            const containerHeight = rect.height;

            const offsetX = (containerWidth / 2 - mouseX) * movementFactor;
            const offsetY = (containerHeight / 2 - mouseY) * movementFactor;

            image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });