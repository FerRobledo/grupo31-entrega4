const cambioImagenes = [
  "/images/0.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
];

let cargadas = 0;
cambioImagenes.forEach(imagen => {
  imagen.onLoad = cargadas++; 
});

if(cargadas === cambioImagenes.length){
  iniciarEvento();
}


function iniciarEvento() {
  
  const textos = document.querySelectorAll(".info-bloque");
  const imagenDinamica = document.querySelector(".imagen-dinamica");
  
  if (textos.length === 0) {
    console.error("No se encontraron elementos .info-bloque");
    return; // Salir si no hay elementos
  }
  
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imagenId = entry.target.getAttribute("data-imagen");
          if (imagenId !== null) {
            const rutaDinamica = cambioImagenes[parseInt(imagenId)];
            console.log("id de imagen seleccionado = " + rutaDinamica);
            if (rutaDinamica) {
              // Verificar si la imagen ya está configurada para evitar parpadeo
              if (imagenDinamica.src !== location.origin + rutaDinamica) {
                // Remover clase para reiniciar la animación
                imagenDinamica.classList.remove("visible");
                // Agregar dinámicamente un id para acomodarlas con CSS (#imagen-x)
                imagenDinamica.id = `imagen-${imagenId}`;
                // Actualizar la imagen después de un breve retraso
                setTimeout(() => {
                  imagenDinamica.src = rutaDinamica;
                  imagenDinamica.classList.add("visible");
                }, 100);
              }
            }
          } else {
            imagenDinamica.classList.remove("visible");
          }
        }
      });
    },
    {
      threshold: 0.8,
    }
  );
  
  textos.forEach((texto) => observer.observe(texto));
}