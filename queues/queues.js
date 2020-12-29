/* Queues
    FIFO - First In, First Out. Primero en entrar, primero en salir.

    Métodos
        a) enqueue: Agrega un elemento al final de la lista.
        b) dequeue: Remover al primer elemento de la lista.
        c) peek: Tomar el primer elemento de la lista. */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
    }
}

const myStack = new Stack();

myStack.push(0);
myStack.push(1);
myStack.push(2);