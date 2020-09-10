/* Closure: Función que recuerda el estado de las cosas cuando fue invocada. */

function crearSaludo(finalDeFrase) {

    // La primera función (crearSaludo), es la función creadora de otras funciones.   

    return (function(nombre) {

        console.log(`Hola ${nombre}, ${finalDeFrase}`);

    });

    // La función anónima recuerda el parámetro pasado en la función padre.

}

const saludoArg = crearSaludo('che');

const saludoMex = crearSaludo('guey');

const saludoCol = crearSaludo('amigo');

saludoArg('Nicole');

saludoMex('Ivan');

saludoCol('Cirilla');