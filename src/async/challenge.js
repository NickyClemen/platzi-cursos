const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunc = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${ API }${ data.results[0].id }`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch(err) {
        console.error(err);
    }
}

console.log('Before');
anotherFunc(API);
console.log('After');

/* Ventajas:
    1) Se puede utilizar try-catch. Mejor manejo de errores.
    2) Mejora la legibilidad. 
Desventajas:
    1) Hay que esperar que sucedan las llamadas.
    2) Hay que usar un polyfile. */