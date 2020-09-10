/* Buffer: Datos crudos (en binario) que se mueven de un lado a otro. 
Un buffer suele venir de un stream. */
const buffer = Buffer.alloc(4); // Crea un buffer vacío. 00 significa que está vacío.
const bufferArr = Buffer.from([1, 2, 3, 4]); // Crear el buffer de una.
const bufferStr = Buffer.from('Hola');

// Se puede trabajar un buffer posición a posición.
const abc = Buffer.alloc(26);
for(let i = 0; i < 26; i++) {
    abc[i] = i + 97; // Se acceden de la misma manera que un array.
}

console.log(abc.toString());
