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
            const grapth = [
                [0, 2],
                [2, 3],
                [2, 1],
                [1, 3],
            ];
        b) Adjancent list: Se pueden utilizar otros tipo de datos.   */