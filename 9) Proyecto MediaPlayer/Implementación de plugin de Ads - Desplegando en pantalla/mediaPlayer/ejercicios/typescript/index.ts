/* Las interfaces, nos permiten declarar la forma exacta que tiene un objeto. No se pueden
agregar propiedades de más ni de menos. En caso de que uno sea opcional, se debe declarar.
Ésto puede ser útil, porque nos ayuda en el autocompletado, y evitar cometer algunos errores. */

// Interfaces.
enum Color {

    Rojo = 'Rojo',
    Verde = 'Verde'

}

interface Rectangulo {

    ancho: number
    alto: number
    color?: Color

}

/* Cuando tenemos una interfaz, se vuelve un tipo, eso quiere decir que lo podemos usar de la misma forma
que hemos tipado las variables, podemos usar las interfaces.
Se tienen que pasar todos los parámetros de la interface. */

let rect: Rectangulo = {

    ancho: 4,
    alto: 6,
    // color: Color.Rojo,

}

function area(r: Rectangulo) {

    return r.alto * r.ancho;

}

const areaRect = area(rect);
console.log(areaRect);

// console.log(rect.toString());
rect.toString = function() {

    return this.color ? `Un rectángulo ${ this.color }.` : `Un rectángulo.`;

}

console.log(rect.toString());


