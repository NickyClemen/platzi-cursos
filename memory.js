/* Los objetos son una referencia a un espacio en memoria.

Cuando se crea una variable, de generan dos procesos:
    1) inicializar variables -> crear una nueva variable.
    2) asignación de variables -> se le asigna un valor a la variable (el espaciuo en memoria a la que
    apunta la variable).

Esto se guarda en la memoria del browser (stack). Es muy rpida pero con poco espacio.
En memoria se almacenan dos valores (no se guardan juntas):
    1) el nombre de la variable.
    2) el valor al que apunta.

JS tiene una memoria para almacenar los nombres de las variables, y otro para almacenar los valores,
pero siguen estando dentro de la memoria stack (se almacenan tipos de dato primitivo).
Esto cambia cuando se trabaja con objetos: en el stack de almacena un pointer (apuntador), el cuál es
una referencia al espacio de memoria en el que est hosteado el objeto (se almacena el nombre de la variable
y el valor es una referencia a la memoria heap donde está almacenado el objeto).
Los objetos se almacenan en la memoria Heap. */
const nicole = {
    age: 15,
    email: 'nicole.ordoqui@gmail.com',
};

const cirilla = nicole; /* Se copia la referencia en memoria al objeto, por lo que se sobreescribe.
Cuando se copia un objeto, se copia el pointer al objeto (se copia la referencia). */
cirilla.age = 2;
cirilla.email = 'cirilla.rusch@gmail.com';

console.log({ nicole, cirilla });