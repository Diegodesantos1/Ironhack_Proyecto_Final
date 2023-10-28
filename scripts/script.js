palabras=["PERRO"]
let palabraFinal = palabras[Math.floor(Math.random() * palabras.length)];
let intentos = 6;
let historialAdivinanzas = [];

document.getElementById("submit").addEventListener("click", () => {
  if (document.getElementById("guess").value.length !== palabraFinal.length) {
    alert(`Debes ingresar una palabra de ${palabraFinal.length} letras.`);
    return;
  }

  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.toUpperCase();
  guessInput.value = "";

  let displayWord = "";

  const correctLetters = new Set();
  const incorrectLetters = new Set();

  for (let i = 0; i < palabraFinal.length; i++) {
    if (palabraFinal[i] === guess[i]) {
      displayWord += `<span class="letter green">${guess[i]}</span>`;
      correctLetters.add(guess[i]);
    } else {
      displayWord += `<span class="letter red">${guess[i]}</span>`;
      if (palabraFinal.includes(guess[i])) {
        incorrectLetters.add(guess[i]);
      }
    }
  }

  for (let i = 0; i < palabraFinal.length; i++) {
    if (!correctLetters.has(guess[i]) && incorrectLetters.has(guess[i])) {
      displayWord = displayWord.replace(`<span class="letter red">${guess[i]}</span>`, `<span class="letter yellow">${guess[i]}</span>`);
    }
  }

  const guessDiv = document.createElement("div");
  guessDiv.innerHTML = displayWord;
  document.getElementById("guess-history").appendChild(guessDiv);
  // Inserta un salto de línea al final de cada adivinanza en el historial
  const br = document.createElement("br");
  document.getElementById("guess-history").appendChild(br);


  intentos--;
  document.getElementById("attempts").textContent = intentos;
  if (intentos >= 0 && palabraFinal === guess) {
    window.location.href = "victoria.html"; // Redirige al jugador a la página "ganaste.html" al ganar
  }
  // si el jugador falla en el último intento, se le redirige a la página "derrota.html"
  else if (intentos === 0 && palabraFinal !== guess){
    window.location.href = "derrota.html";
  }
});
