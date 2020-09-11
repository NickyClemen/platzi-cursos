/** Memoria segmentada.
 * 1) Se puede hacer una compactación de la memoria: Queda la memoria ocupada de un lado, y la libre
 * de otro. Este proceso es muy costoso por el tiempo que toma.
 * 2) Listas enlazadas: No se depende de posiciones contiguas para la reserva de posiciones de memoria.
 * Se basa en el encadenamiento de elementos (nodos).
 * Se empieza con una posición null (start), la cuál es reemplazada por la posición de memoria del primer
 * nodo creado. Un nodo almacena el valor, y un espacio para el puntero del nodo siguiente (si es null,
 * eso indica que es el último nodo de la lista).
 * Cuando se quiere recorrer la lista, ya no hay un índice; hay que ir pasando por cada uno de los nodos,
 * por lo que se va a utilizar un puntero que va a tener la misma dirección que el nodo start, lo
 * que hace que apunte también al primer nodo. Si no se encuentra lo que se busca, se reemplaza
 * la posición de memoria y se pasa al nodo siguiente.
 * Tener cuidado de perder la dirección del puntero start, sino se pierde la lista, por eso se usa
 * uno auxiliar para recorrerlo.
 *
 * Estructuras de datos avanzadas
 *      1) Listas doblemente enlazadas.
 *      2) Listas circulares.
 *      3) Árboles binarios.
 *      4) Grafos.
 */
# include <stdio.h>
# include <stdlib.h>

typedef struct Node {
    int number;
    struct Node * next; // Estructura autoreferenciada.
} NODE;

NODE *createNode(int number) {
    NODE *newNode;
    newNode = malloc(sizeof(NODE));
    newNode -> next = NULL; // Se hace para evitar que se pierdan los nodos.
    newNode -> number = number;

    return newNode;
}

int main(int argc, const char * arg[]) {
    NODE *start = NULL, *current, *next;
    char goOn;
    int listSize = 0, number;

    do {
        printf("La lista contiene %d nodos. Ingrese el siguiente número.\n", listSize);
        scanf("%d", &number);

        if(number) {
            if(!start) {
                start = createNode(number);
                listSize++;
            } else {
                current = start;

                while(current -> next) {
                    current = current -> next;
                }

                current -> next = createNode(number);
                listSize++;
            }

            goOn = 1;
        } else {
            goOn = 0;
        }
    } while(goOn);

    current = start;

    printf("La lista contiene los siguientes números:\n");

    while(current) {
        printf("%d", current -> number);
        printf(current -> next ? ", " : ".\n");
        current = current -> next;
    }

    // Liberar memoria en las listas enlazadas.
    current = start;

    while(current) {
        next = current -> next;
        free(current);
        current = next;
    }

    return 0;
}