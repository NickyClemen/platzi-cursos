/* Usar ";" en Js es opcional, salvo en algunos casos. 

Si se quiere separar sentencias, declarar una variable, hacer el llamado a una función, etc., 
su uso es opcional.
Después de una llave, es totalmente innecesario agrefarlo. */

// Opcional.

alert('Hola')
var nombre = 'Nicole'
const saludarNicole = function() {

    // Declaración.

}

// Son obligatorios en dos casos.

// Primero: Cuando la siguiente sentencia en un array.
console.log('Hola, mi nombre de Nicole');
[1, 2, 3].forEach(n => console.log(n * 2));

// Segundo: Cuando la siguiente sentencia en un template literal.
const nicole = 'Nicole';
console.log('Hola, mi nombre de Cirilla');
`${nicole} es estudiante.`

// Caso especial con el ENTER.

function calcularDoble(numero) {

    return { 
        
        original: numero, 
        doble: numero * 2, 
        
    }
    // Si se hace un enter después del RETURN, JS lo interpreta como un ";". 

}