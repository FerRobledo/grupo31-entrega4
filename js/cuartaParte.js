document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".info-bloque");
  const imagenDinamica = document.querySelector(".imagen-dinamica");
  const imagenes = [
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


  if (textos.length === 0) {
    console.error("No se encontraron elementos .info-bloque");
    return; // Salir si no hay elementos
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imagenId = entry.target.getAttribute("data-imagen");
          console.log("llego")
          if (imagenId !== null) {
            console.log(imagenId)
            const rutaDinamica = imagenes[parseInt(imagenId)];
            console.log("id de imagen seleccionado = " + rutaDinamica);
              if(rutaDinamica){
                imagenDinamica.src = rutaDinamica;
                imagenDinamica.classList.add("visible");
              }
          }
          else{
            imagenDinamica.classList.remove("visible");
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -30% 0px",
    }
  );

  textos.forEach((texto) => observer.observe(texto));
});