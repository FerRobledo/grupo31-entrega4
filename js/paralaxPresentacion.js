// Seleccionamos todos los elementos con la clase 'paralax-presentacion'
const parallaxElements = document.querySelectorAll('.paralax-presentacion');
const elementosGrupo1 = document.querySelectorAll('.grupo1')
const elementosGrupo2 = document.querySelectorAll('.grupo2')
const elementosGrupo3 = document.querySelectorAll('.grupo3')
const fondo = document.getElementById("background-presentacion");

const scrollLimit = 1200;

const scrollAparicionMuñeco1 = 600;
const scrollAparicionMuñeco2 = 900;
const scrollAparicionMuñeco3 = 1200;

const sombra1 = document.getElementById("sombra1");
const sombra2 = document.getElementById("sombra2");
const sombra3 = document.getElementById("sombra3");
const sombras = [sombra1, sombra2, sombra3];

const muñeco1 = document.getElementById("muñeco1");
const muñeco2 = document.getElementById("muñeco2");
const muñeco3 = document.getElementById("muñeco3");

// Agregamos un evento de scroll a la ventana
window.addEventListener('scroll', () => {
    // Obtenemos la cantidad de desplazamiento en el eje Y
    const scrollPosition = window.scrollY;
    let moveFondo = Math.min(scrollPosition * 0.85, scrollLimit);
    
    fondo.style.transform = `translateY(${moveFondo}px)`;

    elementosGrupo1.forEach((element) =>{
        moverElemento(element, .8);
    })
    elementosGrupo2.forEach((element) =>{
        moverElemento(element, .7);
    })
    elementosGrupo3.forEach((element) =>{
        moverElemento(element, .68);
    })

    moverMuñeco(muñeco1, 600, 661, 1);
    moverElemento(muñeco2, 900, 1);
    moverElemento(muñeco3, 1200, 1);

    // Mostrar muñecos de a uno según el scroll
    if (scrollPosition >= scrollAparicionMuñeco1) {
        muñeco1.style.transform = 'translateX(661px)';
    }

    if (scrollPosition >= scrollAparicionMuñeco2) {
        muñeco2.style.opacity = 1;
        muñeco2.style.transform = 'translateY(0)';
    }

    if (scrollPosition >= scrollAparicionMuñeco3) {
        muñeco3.style.opacity = 1;
        muñeco3.style.transform = 'translateY(0)';
    }
});


function moverElemento(elemento, velocidad) {
    let scrollPosition = window.scrollY;
    let moverse = Math.min(scrollPosition * velocidad, scrollLimit)
    if(moverse< scrollLimit){
        elemento.style.transform = `translateY(${moverse}px)`;
    }

    
}

function moverMuñeco(muñeco, x, y){
    if (scrollPosition >= scrollAparicionMuñeco1) {
        muñeco1.style.transform = 'translateX(661px)';
    }
}