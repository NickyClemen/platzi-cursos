// Para trabajar con fechas.
const moment = require('moment');

let ahora = moment();
console.log(ahora);

// Formatear la fecha.
console.log(ahora.format('YYYY/MM/DD - HH:mm'));