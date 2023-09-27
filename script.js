document.addEventListener('DOMContentLoaded', function () {
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";

    const nombreElement = document.getElementById("nombre");
    const alturaElement = document.getElementById("altura");
    const pesoElement = document.getElementById("peso");

    const buscarPokemonButton = document.getElementById("buscarPokemon");
    const pokemonInput = document.getElementById("pokemonInput");

    buscarPokemonButton.addEventListener('click', function () {
        const pokemonNombreONumero = pokemonInput.value.trim().toLowerCase();
        const url = urlBase + pokemonNombreONumero;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                nombreElement.textContent = data.name;
                alturaElement.textContent = data.height;
                pesoElement.textContent = data.weight;
            })
            .catch(error => {
                console.error("No se pudo obtener datos de la API.", error);
            });
    });
});
