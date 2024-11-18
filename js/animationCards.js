let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")

scrollInicio = 2800;

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY;

    // Calcula la posición relativa al inicio definido
  let relativeScroll = scrollPosition - scrollInicio;

  // Activa las tarjetas gradualmente dependiendo del desplazamiento
  if (relativeScroll >= 0 && relativeScroll < 100) {
    card1.classList.add("openCard1");
  }
  if (relativeScroll >= 100 && relativeScroll < 200) {
    card2.classList.add("openCard2");
  }
  if (relativeScroll >= 200) {
    card3.classList.add("openCard3");
  }
})