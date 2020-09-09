const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${ API }${ data.results[0].id }`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => console.log(data.dimension))
    .catch(error => console.log(error));

/* Ventajas:
    1) Son fáciles de enlazar.
    2) Mejora la legibilidad.
    3) Es poderoso.
Desventajas:
    1) No maneja errores.
    2) Propenso a errores si no se tiene en cuenta los llamados.
    3) Se refiere de un polyfile (transpilador) para que funcione en todos los navegadores. */
