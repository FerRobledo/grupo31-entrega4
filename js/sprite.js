let sprite1 = new Image();
sprite1.src = "./images/spriteVerde.png"
let sprite2 = new Image();
sprite2.src = "./images/spriteRed.png"
let sprite3 = new Image();
sprite3.src = "./images/sprite3.png"


let content1 = document.querySelector(".sprite-1")
let content2 = document.querySelector(".sprite-2")
let content3 = document.querySelector(".sprite-3")

let sprites = [
    sprite1,
    sprite2,
    sprite3
]

let cuenta = 0;
sprites.forEach(imagen => {
    try {
        imagen.onload = () => {
            cuenta++;
            if (cuenta === sprites.length) {
                iniciarSprite();
            }
        };
    } catch (error) {
        console.log(error);
    }
})

function iniciarSprite() {
    content1.style.background = `url(${sprite1.src})`;
    content1.classList.add("sprite-1Animation");

    content2.style.background = `url(${sprite2.src})`;
    content2.classList.add("sprite-2Animation");

    content3.style.background = `url(${sprite3.src})`;
    content3.classList.add("sprite-3Animation");
}