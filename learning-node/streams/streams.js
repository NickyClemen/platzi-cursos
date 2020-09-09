/* Stream es una colección de datos, sólo que van llegando de a partes. Ayudan a manejar gran cantidad
de datos. */
const fs = require('fs');
const file = fs.createWriteStream('./big');

for(let i = 0; i <= 1e6; i++) {
    file.write('Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor. ¡Ay, ay, ay! Cuándo vendrá mi amor… Me arrodillo a los pies de mi amante, me levanto constante, constante. Dame la mano, dame la otra, dame un besito sobre la boca. Daré la media vuelta, daré la vuelta entera. Con un pasito atrás, haciendo la reverencia. Pero no, pero no, pero no, porque me da vergüenza, pero sí, pero sí, pero sí, porque te quiero a ti.');
} // Hay que tener cuidado, porque la lectura del archivo puede consumir toda la memoria.

file.end();

/* Los readable y writable streams tienen eventos y funciones. Heredan de EventEmitter.
Los readable streams, tienen 'data' (cuando reciben data), y 'end' (cuando termina de recibir datos). También tiene 'error' para procesar errores.
Las funciones más comúnes son pipe(), unpipe(), read(), , y push().
En Writable streams, está el evento 'drain', que es cuando está emitiendo datos, 'finish' cuando termina, y 'error' para
procesar errores. Las funciones más comúnes, son write() y end(). */