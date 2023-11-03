function iniciarContador() {
    let tiempoRestante = 300000; // 5 minutos en milisegundos
    let intervalId; // Almacenar el identificador del intervalo

    function actualizarCuentaRegresiva() {
        tiempoRestante -= 1000; // Restar 1 segundo (1000 milisegundos)

        // Convertir el tiempo restante a minutos y segundos
        const minutos = Math.floor(tiempoRestante / 60000);
        const segundos = Math.floor((tiempoRestante % 60000) / 1000);

        // Obtener el elemento del footer donde se mostrará la cuenta regresiva
        const cuentaRegresiva = document.getElementById("cuenta-regresiva");

        // Mostrar el tiempo restante en el formato MM:SS
        cuentaRegresiva.textContent = `Tiempo restante: ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        if (tiempoRestante <= 0) {
            detenerContador();
            cuentaRegresiva.textContent = "Tiempo agotado. El juego ha terminado.";
            window.location.href = "index.html";
        }
    }

    function detenerContador() {
        clearInterval(intervalId);
    }

    intervalId = setInterval(actualizarCuentaRegresiva, 1000); // Actualizar cada segundo
}

iniciarContador();
