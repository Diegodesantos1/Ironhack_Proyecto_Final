// Creo un evento que se encarga de obtener el número de letras que el usuario quiere adivinar

document.addEventListener("DOMContentLoaded", () => {

  // Obtengo todos los botones que tienen el atributo "data-letters"

  const buttons = document.querySelectorAll('button[data-letters]');

  // A cada botón le agrego un evento que se encarga de redirigir al usuario a juego.html en función del número de letras que el usuario quiere adivinar

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const letters = button.getAttribute("data-letters");
      window.location.href = `juego.html?letters=${letters}`;
    });
  });

  // Obtengo el valor de "letters" de la URL

  const urlParams = new URLSearchParams(window.location.search);
  const letters = urlParams.get("letters");

  // Actualizo el valor de "maxlength" del campo de entrada según el valor de "letters"

  if (letters) {
    const guessInput = document.getElementById("intento");
    guessInput.setAttribute("maxlength", letters);
  }
});