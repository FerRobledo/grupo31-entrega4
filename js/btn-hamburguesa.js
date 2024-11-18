let container = document.querySelector(".btn-hamburguesa");
let spantop = document.getElementById("span-top");
let spancenter = document.getElementById("span-center");
let spanbottom = document.getElementById("span-bottom");

let cat1 = document.querySelector(".cat1");
let cat2 = document.querySelector(".cat2");
let cat3 = document.querySelector(".cat3");
let nav = document.querySelector("nav");

container.addEventListener("click", function(e) {

    if (spantop.classList.contains("openTop")) {
        // Si las animaciones de apertura están activas, se eliminan y se añaden las de cierre
        nav.classList.add("closeNav");
        nav.classList.remove("openNav");
        spantop.classList.remove("openTop");
        spantop.classList.add("closeTop");
        cat1.classList.remove("openCat1");
        cat1.classList.add("closeCat1");
        
        cat2.classList.remove("openCat2");
        cat2.classList.add("closeCat2");
        spancenter.classList.remove("openCenter");
        spancenter.classList.add("closeCenter");
        
        cat3.classList.remove("openCat3");
        cat3.classList.add("closeCat3");
        spanbottom.classList.remove("openBottom");
        spanbottom.classList.add("closeBottom");
    } else {
        // Si las animaciones de cierre están activas o es el primer clic, se eliminan y se añaden las de apertura
        nav.classList.remove("closeNav");
        nav.classList.add("openNav");
        spantop.classList.remove("closeTop");
        spantop.classList.add("openTop");
        cat1.classList.add("openCat1");
        cat1.classList.remove("closeCat1");
        
        cat2.classList.add("openCat2");
        cat2.classList.remove("closeCat2");
        spancenter.classList.remove("closeCenter");
        spancenter.classList.add("openCenter");
        
        cat3.classList.add("openCat3");
        cat3.classList.remove("closeCat3");
        spanbottom.classList.remove("closeBottom");
        spanbottom.classList.add("openBottom");
    }
});
