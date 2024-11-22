// Bloquea el scroll
function disableScroll() {
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Desbloquea el scroll
function enableScroll() {
    document.body.style.overflowY = 'scroll';
    document.documentElement.style.overflow = '';
}

// Muestra el loader y bloquea el scroll
function showLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'block';
    loadingScreen.style.opacity = 1;
    window.scrollTo(0, 0); // Lleva al usuario al inicio
    disableScroll();
}

// Oculta el loader y habilita el scroll
// Anima la aparicion de objetos
function hideLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0;
    loadingScreen.style.transition = 'opacity 0.5s ease-out';

    let presentacion = document.querySelector(".presentacion");
    presentacion.classList.add("presentacionOpen")

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        enableScroll();
    }, 500);
}

// Ejecución inicial al cargar la página
window.addEventListener('load', () => {
    showLoader();

    setTimeout(() => {
        hideLoader();
    }, 3000); // 3 segundos de espera
});

window.addEventListener("resize", () => {
    window.scrollTo(0, 0); // Fuerza el scroll al inicio
});