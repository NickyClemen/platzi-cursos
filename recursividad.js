/* recursividad -> una función que se llama así misma, creando nuevos hilos de ejecución.
La misma debe tener una validación para detenerla (caso base - base case). */
const numbers = [1, 2, 11, 7, 4, 8, 100, 34, 56, 45667, 6786, 198398, 456, 12];

function recursiveFn(numbersList) {
    if(numbersList.length !== 0) {
        const firtNumber = numbersList[0];
        console.log(firtNumber);

        numbersList.shift();

        recursiveFn(numbersList);
    }
}

recursiveFn(numbers);