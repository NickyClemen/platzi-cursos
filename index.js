class MyArray {
    constructor() {
        this.lenght = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;

        return this.data;
    }

    pop() {
        const lastItem = this.data[this.lenght - 1];

        delete this.data[this.lenght - 1];
        this.lenght--;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data [i + 1];
        }

        delete this.data[this.lenght - 1];
        this.lenght--;
    }
}

const myArray = new MyArray();

/* Strings
    No es una estructura de datos perse, pero sí la manera en la que se almacena en memoria.
    En muchos lenguajes, los strings son inmutables. Son cadena de caracteres (arrays de caracteres).

Hash tables
    Hash tables en otros lenguajes:
        1) JS = Objetos literales
        2) Python: Diccionarios
        3) Java: Maps
        4) Go: Maps
        5) Ruby: Hashes

    En JS, son similares a los object literal, ya que manejan el concepto de key-value. Se puede acceder al valor por el
    key. Para ser una hash table, le falta un paso intermedio (hash function), que genera un hash, la cuál,
    se convierte en el address para poder al valor (convierte la key en un hash).
        [hash] key: value -> Bucket.

    Métodos
        1) insert: Agregar.
        2) search: Buscar.
        3) delete: Eliminar.

    Colisión de Hash Tables
        HAy veces que una key, puede generar el mismo hash asignado a otro key, por lo que puede generar que haya dos elementos
        almacenados en el mismo bucket. No se puede evitar. */
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;

        for(let i = 0; i < key.lenght; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.lenght;
        }

        return hash;
    } // Las hash function suelen venir implementadas dentro del objeto.

    set(key, value) {
        const address = this.hashMethod(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if(currentBucket) {
            for(let i = 0; i < currentBucket.lenght; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('hola', 'mundo');