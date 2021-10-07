const abc = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA(value) {
        this.a = value;
    }
};

const obj = {};

for(let prop in abc) {
    obj[prop] = abc[prop];
    /* shallow copy -> se crea un nuevo objeto a partir de las propiedades de uno existente.
    Con este método (ciclo for), se copian las referencias de los objetos anidados, no los
    valores de las propiedades.
    El Shallow Copy (copia superficial) es una copia bit a bit de un objeto.
    Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original.
    Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las
    direcciones de referencia, es decir, solo se copia la dirección de memoria. */
}

const objs = Object.assign({}, abc);
/* Object.assign -> Necesita dos parámetros:
    a) Objeto vacío.
    b) el objeto que se quiere copiar.
Mismo problema que el ciclo for.
El método Object.assign () copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.

Las propiedades del objeto de destino se sobrescriben con las propiedades de los orígenes
si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las
anteriores. */
const objCreate = Object.create(obj); /* Se le indica nada más que objeto se quiere crear.
Las propiedades del objeto quedan guardadas en el objeto __proto__.
Las propiedades modificadas se muestran por fuera de __proto__ ya que el valor
se lo asignamos.
Si se cambian las propiedades del objeto original, se modifican lso valores dentro del objeto
hederado en __proto__.

La principal diferencia entre Object.create() y Object.assign() es que el método Object.assign
crea un nuevo Object. utiliza el objeto proporcionado como prototipo del Objeto recién creado.
Mientras que el método Object.assign() copia todas las propiedades de los objetos de origen
al objeto de destino, que es el primer parámetro de esta función y devuelve este Objeto de
destino. Por lo tanto, vemos que mientras Object.create() define propiedades en nuestro
Object recién creado. Object.assign() simplemente asigna el valor de los objetos
de origen de destino a nuestro Objeto de destino. */

/* JSON.stringify es un método estático del prototipo JSON que castea objetos a string.
JSON.parse convierte en objeto un string.
Esto no conviene si trabajamos con métodos. */
const objStringifiedComplex = JSON.stringify(abc);
const objStringifiedComplexParse = JSON.parse(objStringifiedComplex);

console.log({ abc, obj, objCreate, objStringifiedComplex, objStringifiedComplexParse });
