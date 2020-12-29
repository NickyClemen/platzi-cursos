/* Stack
    LIFO - Last In, First Out: El último en entrar, es el primero en salir.
        Métodos
            a) pop: Remueve el último elemento.
            b) push: Agregar un elemento al final.
            c) peek: Tomar al último elemento de la línea (primer elemento). */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;

            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;
    }
}

const myStack = new Stack();

myStack.push(0);
myStack.push(1);
myStack.push(2);