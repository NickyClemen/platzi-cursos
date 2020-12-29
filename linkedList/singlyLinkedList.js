/* Linked List (listas enlazadas en C)
    Concatenación de nodos ligados entre sí.
    El principal, se convierte en la cabeza (head) con el valor inicial.
    El último, se convierte en la cola (tail).

    Singly Linked List - Tiene una sola dirección de memoria anidada.
        Métodos
            a) prepend: Agrega un nodo al inicio. El nodo se convierte en head.
            b) append: Agrega un nodo al final. El nodo se convierte en tail.
            c) lockup/search: Busca un nodo.
            d) insert: Inserta un nodo en la lista.
            e) delete: Borrar un nodo.

    Doubly Linked List - Se puede recorrer la lista en dos direcciones: De head a tail, y viceversa.
    El nodo se compone del value, next (puntero al próximo nodo) y prev (puntero al nodo anterior). En tail,
    next apunta a null.

    Para buscar un valor, no se le pasa el key de manera directa, sino que se recorre toda la lista
    hasta encontrarlo. No se puede volver para atrás, por lo que para buscar un valor, hay que volver a recorrer
    la lista entera.

    Los nodos se componen de dos factores:
        a) valor
        b) valor del next (valor del siguiente nodo). El next de tail, es null (permite agregar otro nodo al final).

    Los nodos se guardan en espacios de memoria aleatorios, pero quedan relacionados entre sí al almacenar un
    puntero al siguiente nodo.  */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if(index >= this.length) {
            this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        };

        this.tail = this.head;
        this.length = 1;
    }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(3, 3));
