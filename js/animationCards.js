let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")

//Posicion en la que inicia el efecto paralax
scrollInicio = 1700;

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY;
    // Calcula la posición relativa al inicio definido
  let relativeScroll = scrollPosition - scrollInicio;

  // Activa las tarjetas gradualmente dependiendo del desplazamiento
  if(relativeScroll > 0){
    card1.classList.add("openCard1");
    card2.classList.add("openCard2");
    card3.classList.add("openCard3");
  }
})