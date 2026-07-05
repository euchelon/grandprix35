// -------------------------
// CONFIGURACIÓN
// -------------------------

const velocidadEscritura = 35;
const pausaEntreLineas = 400;

const typing = new Audio("audio/typing.mp3");
typing.volume = 0.20;


// -------------------------
// ESCRIBIR UNA LÍNEA
// -------------------------

async function escribirLinea(elemento) {

    const texto = elemento.textContent;

    elemento.textContent = "";
    elemento.style.display = "block";

    typing.currentTime = 0;

    try {
        typing.play();
    } catch (e) {}

    for (let i = 0; i < texto.length; i++) {

        elemento.textContent += texto[i];

        await new Promise(resolve =>
            setTimeout(resolve, velocidadEscritura)
        );

    }

    typing.pause();

}


// -------------------------
// INICIAR TERMINAL
// -------------------------

async function iniciarTerminal(botones) {

    const lineas = document.querySelectorAll(".linea");

    for (const linea of lineas) {

        await escribirLinea(linea);

        await new Promise(resolve =>
            setTimeout(resolve, pausaEntreLineas)
        );

    }

    // Si no hay botones
    if (!botones) return;


    // Si solo hay un botón
    if (!Array.isArray(botones)) {

        document.getElementById(botones).style.display = "block";
        return;

    }


    // Si hay varios botones
    botones.forEach((id, indice) => {

        setTimeout(() => {

            document.getElementById(id).style.display = "block";

        }, indice * 500);

    });

}