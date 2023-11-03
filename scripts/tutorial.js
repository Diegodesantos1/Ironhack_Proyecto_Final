// crea la función para ir a index.html al clicar en el botón

const boton = document.getElementById("volver");

boton.addEventListener("click", () => {
    window.location.href = "index.html";
});