/* Obejct.entries. Permite devolver las key-value de una matriz. */
const data = {
    frontend: 'Nicole',
    backend: 'Cirilla',
    design: 'Ivan' 
}

// Transformar el objeto en una matriz.
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); // Con length se puede saber cuántos elementos tiene.

/* Object.value(). Devuelve los values de un objeto en un array. */
const values = Object.values(data);
console.log(values);
console.log(entries.length); // Con length se puede saber cuántos elementos tiene.

/* Padding. Anteponer elementos o un string vacío. */
const string = 'hello'; 
console.log(string.padStart(7, 'hi'));
/* Parámetros:
    1) maxLength: Máximo de caracteres a añadir.
    2) Caracteres que se quiere añadir. */
console.log(string.padEnd(12, ' -----'));

// Trailing comma. Agregar una coma al final de un objeto. Permite seguir agregando valores.
const obj = {
    name: 'Nicole',
}

// Async-await.
const helloWord = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error.'))
    });
}

const helloAsync = async () => {
    const hello = await helloWord();
    console.log(hello);
}

helloAsync();

const anotherFunc = async () => {
    try {
        const hello = await helloWord();
        console.log(hello);
    } catch(error) {
        console.log(error);
    }
}