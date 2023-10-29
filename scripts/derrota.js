// Importa la variable "resultado" del archivo "script.js"
import { resultado } from './juego.js';


const volverAJugarButton = document.getElementById('volver-a-jugar');
volverAJugarButton.addEventListener('click', () => {
  // Redirige a la página "index.html"
  window.location.href = 'index.html';
});

