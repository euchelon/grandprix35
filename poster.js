const poster = document.getElementById("poster");
const boton = document.getElementById("posterBtn");
const flash = document.getElementById("flash");

const musica = new Audio("audio/poster.mp3");
musica.volume = 0.18;

// Empieza el destello
setTimeout(() => {

    flash.style.opacity = "1";

}, 200);

// Empieza la música y aparece el póster
setTimeout(() => {

    musica.play();

    poster.style.opacity = "1";
    poster.style.transform = "scale(1.04)";

}, 900);

// El velo blanco desaparece lentamente
setTimeout(() => {

    flash.style.opacity = "0";

}, 1400);

// Aparece el botón
setTimeout(() => {

    boton.style.display = "block";

}, 5200);