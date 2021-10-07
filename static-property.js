/* static: atributos o métodos a los que se pueden acceder sin crear una instancia del objeto.
    Object.keys: retorna un array con las propieades enumerables del objeto.
    Object.getOwnPropertyNames: retorna un array con las propieades propias del objeto.
    Object.entries: retorna un array de arrays con las key-values de los objetos.
    Object.getOwnPropertyDescriptors: retorna un objeto con todas las propiedades. Las propiedades que retorna
    (writable, configurable, enumerable) es la forma que tiene JS de limitar la sobreescritora de los atributos.
    Tener encuentra del cambio del contexto de this cuando se trabaja con funciones desde este método.
    Object.defineProperty: define una nueva propiedad dentro de un objeto. Recibe como parámetros:
        a) nombre del objeto.
        b) nombre de la nueva propiedad.
        c) objeto de configuración con los atributos del propietario. */
const nicole = {
    username: 'clemenicky',
    password: 'Ciren2020',
    email: 'nicole.ordoqui@gmail.com',
    age: 30,
    isAdmin: true,
    librosLeidos: [
        'La broma infinita',
        'Stoner',
        'Retrato de un artista cachorro',
        'No es país para viejos',
        'Sutree',
        'Ulises',
        'Tierna es la noche',
        'La casa de cristal',
        'Veinte poemas para ser leídos en un tranvía',
        'Bonsai',
        'Los detectives salvajes',
        'Ficciones',
        'Adán Buenosayres',
        'En la masmédula',
        'Pedro Páramo',
        'Guerra y paz',
        'Los hermanos Karamazov',
        'La caída de la casa Usher y otros cuentos'
    ],
    addBook: title => this.librosLeidos.push(title),
};

const keys = Object.keys(nicole);
console.log(keys);

const getPropertyNames = Object.getOwnPropertyNames(nicole);
console.log(getPropertyNames);

const entries = Object.entries(nicole);
Object.entries(nicole)[6][1]('La balada del viejo marinero'); /* retorna undefined por los cambios
en el contexto y en el this. */
console.log(entries);

Object.defineProperty(nicole, 'pruebaNasa', {
    value: 'extraterrestres',
    writable: false,
    configurable: false,
    enumerable: false,
});

Object.defineProperty(nicole, 'navigator', {
    value: 'Chrome',
    writable: true,
    configurable: true,
    enumerable: false, // La propiedad queda oculta, no se puede listar.
});

Object.defineProperty(nicole, 'editor', {
    value: 'VSCode',
    writable: false, // No permite sobreescribir el value de la propiedad pero sí eliminarlo.
    configurable: true,
    enumerable: true,
});

Object.defineProperty(nicole, 'Terminal', {
    value: 'WSL',
    writable: true,
    configurable: false, // Permite que la propiedad sea editada pero no eliminada.
    enumerable: true,
});

Object.seal(nicole); // Evita que las propiedades sean eliminadas (pone configurable en false).
Object.freeze(nicole); /* Evita que las propiedades sean sobreescritas o eliminadas (configurable y
writable en false). */

const descriptor = Object.getOwnPropertyDescriptors(nicole);
console.log(descriptor);