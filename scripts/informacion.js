// Me conecto al archivo JSON para obtener los datos de los Pokémon

const requestURL = 'https://diegodesantos1.github.io/Ironhack_Proyecto_Final/data/pokemon.json';

// Realizo una solicitud para obtener los datos del archivo JSON
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// Definir el evento load para la solicitud
request.onload = function () {
    const pokemonData = request.response;

    // Definir el evento click para el botón de búsqueda
    document.getElementById("buscar").addEventListener("click", () => {
        // Obtener el valor del campo de búsqueda
        const busqueda = document.getElementById("busqueda").value.trim().toUpperCase();

        // Buscar el Pokémon por su nombre en el array

        const pokemonEncontrado = pokemonData.find(pokemon => pokemon.name.toUpperCase() === busqueda);

        // Mostrar la información del Pokémon
        if (pokemonEncontrado) {
            const informacionPokemon = document.getElementById("datos-pokemon");
            informacionPokemon.innerHTML = `
                <img src="data/soluciones/${pokemonEncontrado.name}.png" alt="${pokemonEncontrado.name}">
                <h2>${pokemonEncontrado.name.toUpperCase()}</h2>
                <p>Generación: ${pokemonEncontrado.gen}</p>
                <p>Altura: ${pokemonEncontrado.height}</p>
                <p>Peso: ${pokemonEncontrado.weight}</p>
                <p>Tipo: ${pokemonEncontrado.type.join(", ")}</p>
                <p>Especies: ${pokemonEncontrado.species}</p>
                <p>Habilidades: ${pokemonEncontrado.abilities}</p>
            `;
        } else {
            alert("No se encontró ningún Pokémon con ese nombre.");
        }
        // quito el texto del campo de búsqueda
        document.getElementById("busqueda").value = "";
    });
    // Definir el evento keyup para el campo de búsqueda
    document.getElementById("busqueda").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            // Obtener el valor del campo de búsqueda
            const busqueda = this.value.trim().toUpperCase();

            // Buscar el Pokémon por su nombre en el array
            const pokemonEncontrado = pokemonData.find(pokemon => pokemon.name.toUpperCase() === busqueda);

            // Mostrar la información del Pokémon
            if (pokemonEncontrado) {
                const informacionPokemon = document.getElementById("datos-pokemon");
                informacionPokemon.innerHTML = `
                <img src="data/soluciones/${pokemonEncontrado.name.toUpperCase()}.png" alt="${pokemonEncontrado.name}">
                <h2>${pokemonEncontrado.name}</h2>
                <p>Generación: ${pokemonEncontrado.gen}</p>
                <p>Altura: ${pokemonEncontrado.height}</p>
                <p>Peso: ${pokemonEncontrado.weight}</p>
                <p>Tipo: ${pokemonEncontrado.type.join(", ")}</p>
                <p>Especies: ${pokemonEncontrado.species}</p>
                <p>Habilidades: ${pokemonEncontrado.abilities}</p>
            `;
            } else {
                alert("No se encontró ningún Pokémon con ese nombre.");
            }
            // quito el texto del campo de búsqueda
            this.value = "";
        }
    });
};


