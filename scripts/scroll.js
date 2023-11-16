// Función para hacer la solicitud y obtener los datos

function Obtenerdatos(url) {
    // Devuelve una nueva promesa que se resuelve con los datos para asegurrse que los datos se obtienen antes de realizar acciones
    return new Promise((resolve, reject) => {
        // Crear una solicitud
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject('Error al obtener datos');
            }
        };
        request.onerror = function () {
            reject('Error de red');
        };
        request.send();
    });
}

// Llamada para obtener los datos y luego realizar acciones
Obtenerdatos('https://diegodesantos1.github.io/Ironhack_Proyecto_Final/data/pokemon.json')
    .then((pokemonData) => {
        // Código para manejar los datos una vez obtenidos y mostrarlos en el scroll
        document.getElementById('intento').addEventListener('keyup', function () {
            let scroller = document.getElementById('scrollContainer');
            scroller.style.display = 'block';
            const letter = this.value.trim().toUpperCase();
            if (letter.length > 0) {
                renderPokemonByLetter(letter, pokemonData);
            } else {
                clearItemList();
                scroller.style.display = 'none';
            }
        });

        // Código para manejar los datos una vez obtenidos y mostrarlos en el scroll
        function renderPokemonByLetter(letter, pokemonData) {
            const list = document.getElementById('itemList');
            list.innerHTML = '';

            const filteredPokemon = pokemonData.filter((pokemon) => {
                const name = pokemon.name.toUpperCase();
                return name.startsWith(letter);
            });

            filteredPokemon.forEach((pokemon) => {
                const item = document.createElement('li');
                const nameLink = document.createElement('p');
                nameLink.textContent = pokemon.name;
                item.addEventListener('click', () => {
                    document.getElementById('intento').value = pokemon.name;
                });
                item.appendChild(nameLink);
                list.appendChild(item);
            });
        }

        // Para borrar los items de la lista una vez realizada la búsqueda

        function clearItemList() {
            const list = document.getElementById('itemList');
            list.innerHTML = '';
            scrollContainer.style.display = 'none';
        }
    })
    .catch((error) => {
        console.error(error);
    });

