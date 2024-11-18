document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".info-bloque");
  const imagenes = document.querySelectorAll(".imagen");

  if (textos.length === 0 || imagenes.length === 0) {
    console.error("No se encontraron elementos .info-bloque o .imagen");
    return; // Salir si no hay elementos
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imagenId = entry.target.getAttribute("data-imagen");
          if (imagenId) {
            imagenes.forEach((img) => img.classList.remove("visible"));
            const imagenVisible = document.getElementById(imagenId);
            if (imagenVisible) {
                imagenVisible.classList.add("visible");
            }
          }
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  textos.forEach((texto) => observer.observe(texto));
});