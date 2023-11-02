document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('button[data-letters]');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const letters = button.getAttribute("data-letters");
      // Redirige al usuario a juego.html
      window.location.href = `juego.html?letters=${letters}`;
    });
  });

  // Obtén el valor de "letters" de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const letters = urlParams.get("letters");

  // Actualiza el valor de "maxlength" del campo de entrada según el valor de "letters"
  if (letters) {
    const guessInput = document.getElementById("intento");
    guessInput.setAttribute("maxlength", letters);
  }
});
