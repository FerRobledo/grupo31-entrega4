// Seleccionamos todos los elementos con la clase 'paralax-presentacion'
const parallaxElements = document.querySelectorAll('.paralax-presentacion');
const elementosGrupo1 = document.querySelectorAll('.grupo1')
const elementosGrupo2 = document.querySelectorAll('.grupo2')
const elementosGrupo3 = document.querySelectorAll('.grupo3')

const scrollLimit = 1800;

const scrollAparicionMuñeco1 = 300;
const scrollAparicionMuñeco2 = 900;
const scrollAparicionMuñeco3 = 1200;

const sombra1 = document.getElementById("sombra1");
const sombra2 = document.getElementById("sombra2");
const sombra3 = document.getElementById("sombra3");

const muñeco1 = document.getElementById("muñeco1");
const muñeco2 = document.getElementById("muñeco2");
const muñeco3 = document.getElementById("muñeco3");

// Agregamos un evento de scroll a la ventana
window.addEventListener('scroll', () => {

    elementosGrupo1.forEach((element) =>{
        rotateElemento(element, .1);
    })
    elementosGrupo2.forEach((element) =>{
        rotateElemento(element, .1);
    })
    elementosGrupo3.forEach((element) =>{
        rotateElemento(element, .125);
    })

    moverElemento(muñeco1, -.1);
    moverElemento(muñeco2, -.2);
    moverElemento(muñeco3, -.4);
    moverElemento(sombra1, .03);
    moverElemento(sombra2, .025);
    moverElemento(sombra3, .08);
});


function moverElemento(elemento, velocidad) {
    let scrollPosition = window.scrollY;
    let moverse = scrollPosition * velocidad
    elemento.style.transform = `translateY(${moverse}px)`;
}

function rotateElemento(elemento, velocidad){
    let scrollPosition = window.scrollY;
    let rotar = scrollPosition * velocidad
    elemento.style.transform = `rotateX(${rotar}deg)`
}