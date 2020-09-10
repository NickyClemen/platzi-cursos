/* Otra de las características de las funciones puras, es la inmutabilidad de las variables. 
Trabajan solamente con los valores que recibe. Tratan de no mutar las variables de la aplicacion. */

// Mutando.
const addToList = (list, item, quantity) => {

    list.push({

        item,
        quantity

    });

    return list;

}

// Sin mutar.
const addToList = (list, item, quantity) => {

    const newList = JSON.parse(JSON.stringify(list));

    newList.push({

        item,
        quantity

    });

    return newlist;

}