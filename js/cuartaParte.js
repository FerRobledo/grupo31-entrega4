let img = new Image();
img.src = "./images/0.png";
let img1 = new Image();
img1.src = "./images/1.png";
let img2 = new Image();
img2.src = "./images/2.png";
let img3 = new Image();
img3.src = "./images/3.png";
let img4 = new Image();
img4.src = "./images/4.png";
let img5 = new Image();
img5.src = "./images/5.png";
let img6 = new Image();
img6.src = "./images/6.png";
let img7 = new Image();
img7.src = "./images/7.png";
let img8 = new Image();
img8.src = "./images/8.png";
let img9 = new Image();
img9.src = "./images/9.png";
let img10 = new Image();
img10.src = "./images/10.png";

const cambioImagenes = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
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
            if (rutaDinamica) {
              // Verificar si la imagen ya está configurada para evitar parpadeo
              if (imagenDinamica.src !== rutaDinamica.src) {
                // Remover clase para reiniciar la animación
                imagenDinamica.classList.remove("visible");
                // Agregar dinámicamente un id para acomodarlas con CSS (#imagen-x)
                imagenDinamica.id = `imagen-${imagenId}`;
                // Actualizar la imagen después de un breve retraso
                setTimeout(() => {
                  imagenDinamica.src = rutaDinamica.src;
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