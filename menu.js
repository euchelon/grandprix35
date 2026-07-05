iniciarTerminal([
    "dentroBtn",
    "pensarBtn",
    "rajoBtn"
]);

async function mostrarPopup(lineas) {

  sonar();

  const popup = document.getElementById("popup");
  const popupTexto = document.getElementById("popupTexto");
  const volverBtn = document.getElementById("volverBtn");

  popup.style.display = "block";
  popupTexto.innerHTML = "";
  volverBtn.style.display = "none";

  const typing = new Audio("audio/typing.mp3");
  typing.volume = 0.20;

  for (const texto of lineas) {

    const p = document.createElement("p");
    popupTexto.appendChild(p);

    typing.currentTime = 0;

    try {
      typing.play();
    } catch (e) {}

    for (let i = 0; i < texto.length; i++) {

      p.innerHTML += texto[i];

      await new Promise(resolve => setTimeout(resolve, 35));

    }

    typing.pause();

    await new Promise(resolve => setTimeout(resolve, 350));

  }

  volverBtn.style.display = "block";

}

function cerrarPopup() {
   sonar();
  document.getElementById("popup").style.display = "none";
}