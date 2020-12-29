/* Trees
    Similar al DOM del browser. Genera una ramificación de datos.
        Node Root (raíz) - Nodo principal
        Parent Node (padres) - Son ramas que tienen otras ramas que dependen de ellos.
        Child Node (hijos) - Nodos que dependen del nodo padre.
        Node Leaf (hojas) - Nodos que no tienen ramificaciones.
        Sibling Node (hermanos) - Nodos que tienen otros en común.
        Sub tree - Trees que descienden del root.

    Binary trees (perfect binary tree): Trees que se van a ramificando conforme se generan los nodos. En un perfect binary
    tree (binary tree balanceado por tener la misma cantidad de nodos de los dos lados), los nodos se van multiplicando
    hacía abajo.

    Binary search trees (balance tree): Se utilizan para buscar información. La regla principal, es que los números que van en
    aumento, se generan en el lado derecho; y los que disminuyen, del lado izquierdo. Es importante para utilizar
    divide and conquer.

    Binary search trees (unbalanced tree): No cumple con la regla de los nodos multiplicando hacía abajo.

    Métodos
        a) search: Busca un nodo.
        b) insert: Insertar nodos.
        c) delete: Eliminar nodos. */
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTrees {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;

                        return this;
                    }

                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;

                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const myBinaryTree = new BinarySearchTrees();