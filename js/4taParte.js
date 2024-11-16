const imagenesParte4 = [
    'images/0.png',
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
];

const cambioImagenes = document.getElementById('cambioImagenes');

scrollInit4 = 5200;

primerImagen = 5500;


window.addEventListener("scroll", function(){
    scrollPosition4 = window.scrollY - scrollInit4;
    primerImagen = window.scrollY - primerImagen;

    if(scrollPosition4 >= 0){
        mover4(cambioImagenes, 1, scrollPosition4);
    }

    if(primerImagen >= 0){
        cambioImagenes.src = imagenesParte4[1];
    }
})

function mover4(elemento, y, scrollPosition4) {

    elemento.style.transform = `translateY(${scrollPosition4*y}px)`;
    
}
