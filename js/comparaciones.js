// var x = 4, y = '4';

/* Se usa "==" para comparar dos variables.
lo que hace JS con el "==", es llevar los dos valores al mismo tipo de dato.
El "===" es para comparar los valores y ver si son del mismo tipo de dato. 
Siempre que se pueda, usar el "===". */

var nicole = {

    nombre: 'Nicole'

}

// Como hacer que la comparación de TRUE.

var otraPersona = {

    nombre: 'Nicole' // De ésta manera, apuntan a dos lugares de memoria distintos.

} // Se desglosa el objeto NICOLE en un nuevo objeto. Se llama OBJETO LITERAL.

/* Al ponerlo de ésta manera, lo que estamos haciendo, es que apunte a la misma referencia,
al mismo espacio de memoria. */

/* Cuando se comparan objetos, ya sea con el "==" o con el "===", lo que hace JS es preguntar
por la referencia a la variable que estamos utilizando. 

Existen cinco tipos de datos que son primitivos:

        a) Boolean.
        b) Null.
        c) Undefined.
        d) Number.
        e) String. */