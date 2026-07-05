const lineas = document.querySelectorAll(".linea");

lineas.forEach((linea, indice) => {
  setTimeout(() => {
    linea.style.display = "block";
  }, indice * 1000);
});

setTimeout(() => {
  location.href = "final.html";
}, lineas.length * 1000 + 1000);