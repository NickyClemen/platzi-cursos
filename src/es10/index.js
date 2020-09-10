// flat(). Retorna submatrices.
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(3)); /* Se le pasa la profundidad de la matriz. Si no se especifica,
se ejecuta el primer NavigationPreloadManager. */

// flatMap(). Mapea cada elemento y lo aplana según un criterio.
let arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(value => [value, value * 2]));

// trimStart(). Elimina los espacios en blanco de un string.
let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart());

// trimEnd(). Elimina los espacios al final del texto.
let hell = 'hello world      ';
console.log(hell);
console.log(hell.trimEnd());

/* Opcional catch binding. Pasar de forma opcional el parámetro de error al catch. Está disponible
dentro del cuerpo del catch. */
try {

} catch {
    error;
}

/* From entries. Tranforma key-value en un objeto. Sirve para trabajar con arrays. */
let entries = [['name', 'Nicole'], ['age', 29]];
console.log(Object.fromEntries(entries));

// symbol.description. Ayuda a acceder a la descripción de un symbol.
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

// TC39: Comité que prepara las features de JS.