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
        const input = document.getElementById('intento');
        const scroller = document.getElementById('scrollContainer');

        input.addEventListener('keyup', function (event) {
            scroller.style.display = 'block';
            const letter = this.value.trim().toUpperCase();

            if (event.key === 'Enter') {
                const firstPokemon = document.querySelector('#itemList li:first-child p');
                if (firstPokemon) {
                    const pokemonName = firstPokemon.textContent;
                    input.value = pokemonName;
                    scroller.style.display = 'none';
                    setTimeout(() => {
                        document.getElementById('buscar').click();
                    }, 1);
                }
            } else if (letter.length > 0) {
                renderPokemonByLetter(letter, pokemonData);
            } else {
                clearItemList();
                scroller.style.display = 'none';
            }
        });

        function renderPokemonByLetter(letter, pokemonData) {
            const list = document.getElementById('itemList');
            list.innerHTML = '';

            const filteredPokemon = pokemonData.filter((pokemon) => {
                const name = pokemon.name.toUpperCase();
                return name.startsWith(letter);
            });

            if (filteredPokemon.length === 0) {
                scroller.style.display = 'none';
            } else {
                filteredPokemon.forEach((pokemon) => {
                    const item = document.createElement('li');
                    const nameLink = document.createElement('p');
                    nameLink.textContent = pokemon.name;
                    item.addEventListener('click', () => {
                        input.value = pokemon.name;
                        scroller.style.display = 'none';
                    });
                    item.appendChild(nameLink);
                    list.appendChild(item);
                });
            }
        }

        function clearItemList() {
            const list = document.getElementById('itemList');
            list.innerHTML = '';
            scroller.style.display = 'none';
            input.value = '';
        }
    })
    .catch((error) => {
        console.error(error);
    });
