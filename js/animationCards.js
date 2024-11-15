let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")

scrollInicio = 2800;

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY - scrollInicio;

    if(scrollPosition >= 0){
        card1.classList.add("openCard1");
        card2.classList.add("openCard2");
        card3.classList.add("openCard3");
    }
})