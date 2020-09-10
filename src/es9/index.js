/* Operador de reposo. Extraer las características de un objeto que aún no se ha construido.
Encapsula propiedades del objeto. */
const obj = {
    name: 'Nicole',
    age: 29,
    country: 'ARG'
}

let { name, ...all } = obj;
console.log(name, all);

// Usar spread para anidar objetos.
const object = {
    ...obj,
    country: 'MX'
}
console.log(object);

/* Promise.finally. Saber cuándo termina un llamado para ejecutar lógica. */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error.'));
    });
}

helloWorld()
    .then(responde => console.log(responde))
    .catch(reject => console.log(reject))
    .finally(() => console.log('Finalizó.')) // Se ejecuta siempre.

// Mejor manejo de expresiones regulares.    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
