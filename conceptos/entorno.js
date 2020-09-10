let nombre = process.env.NOMBRE || 'Cirilla'; // Ingresa al proceso.
let web = process.env.WEB || 'Sin web';

console.log(`Hola, ${ nombre }. Mi web es ${ web }.`);