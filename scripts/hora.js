// Función para obtener la hora actual en formato HH:MM:SS
function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

// Función para actualizar la hora actual en el footer
function actualizarHora() {
    const horaActual = obtenerHoraActual();
    document.getElementById('hora-actual').textContent = `Hora actual: ${horaActual}`;
}

// Actualizar la hora cada segundo (1000 milisegundos)
setInterval(actualizarHora, 1000);

// Mostrar la hora actual al cargar la página
actualizarHora();