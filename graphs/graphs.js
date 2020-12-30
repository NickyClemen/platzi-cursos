/* Graphs
    Son nodos interconectados.
    Están compuestos por:
        a) Nodes (vértices).
        b) Edge (bordes): Pointer que conectar un nodo con otro.

    Tipos de grafos:
        a) Dirigidos: Un nodo nos lleva a otro nodo.
        b) No dirigidos: Nodos interconectados que nos permite ir y volver entre ellos.
        c) Ponderados: En el nodo hay un peso (es un valor).
        d) No ponderados: Los nodos no tienen nada.
        e) Cíclicos: Se puede recorrer todo el grafo volviendo al punto de inicio.
        f) Acíclicos: No se puede volver al punto de inicio cuando se lo recorre.

    Forma de representar los graphs
        a) Edge list: Un array list. Representan las conexiones entre los nodos.
            const graph = [
                [0, 2],
                [2, 3],
                [2, 1],
                [1, 3],
            ];
        b) Adjacent (JSON) List: Se pueden utilizar otros tipo de datos.
            const graph = [
                [2], [2, 3], [0, 1, 3], [1, 2],
            ]; -> Un array con arrays internos que muestra las conexiones por índices.

            const graph = {
                0: [2],
                1: [2, 3],
                2: [0, 1, 3],
                3: [1, 2],
            }; -> Es más fácil organizarlo visualmente.

        c) Adjacent (JSON) Matrix
            const graph = [
                [0, 0, 1, 0],
                [0, 0, 1, 1],
                [1, 1, 0, 1],
                [0, 1, 1, 0],
            ]; -> Se representa con cero y uno (muy parecido al binario).
            Si existe una conexión, se coloca 1. Si no existe, se coloca 0.

            const graph = {
                0: [0, 0, 1, 0],
                1: [0, 0, 1, 1],
                2: [1, 1, 0, 1],
                3: [0, 1, 1, 0],
            }; */
class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(nodeOne, nodeTwo) {
        this.adjacentList[nodeOne].push(nodeTwo);
        this.adjacentList[nodeTwo].push(nodeOne);
    }
}

const myGraph = new Graph();