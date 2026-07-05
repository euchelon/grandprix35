const checkbox = document.getElementById("acepto");
const label = document.querySelector('label[for="acepto"]');
const boton = document.getElementById("startBtn");

async function iniciarDisclaimer() {

    const lineas = document.querySelectorAll(".linea");

    for (const linea of lineas) {

        await escribirLinea(linea);

        await new Promise(resolve =>
            setTimeout(resolve, pausaEntreLineas)
        );

    }

    // Mostrar checkbox
    checkbox.style.display = "inline";
    label.style.display = "inline";

    await new Promise(resolve =>
        setTimeout(resolve, 400)
    );

    // Mostrar botón
    boton.style.display = "inline-block";

}

iniciarDisclaimer();

checkbox.addEventListener("change", function () {

    boton.disabled = !checkbox.checked;

});