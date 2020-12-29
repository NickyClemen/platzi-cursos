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
    En muchos lenguajes, los strings son inmutables. Son cadena de caracteres (arrays de caracteres). */
