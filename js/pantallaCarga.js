// Bloquea el scroll
function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Desbloquea el scroll
function enableScroll() {
    document.body.style.overflow = '';
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
function hideLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0;
    loadingScreen.style.transition = 'opacity 0.5s ease-out';

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
    }, 5000); // 5 segundos de espera
});
