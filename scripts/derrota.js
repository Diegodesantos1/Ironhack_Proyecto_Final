
const volverAJugarButton = document.getElementById('volver-a-jugar');
volverAJugarButton.addEventListener('click', () => {
  // Redirige a la página "index.html"
  window.location.href = 'index.html';
});
// Obtén la referencia al elemento <span> con el id "solucion"
var solucionElement = document.getElementById("solucion");

// Obtén la palabra de solución de tu variable palabraFinal
var palabraSolucion = palabraFinal;

// Inserta la palabra de solución en el elemento <span>
solucionElement.innerHTML = palabraSolucion;
