/** Punteros
La memoria de organiza en cuadrículas contiguas de ocho bits (ocho números cada una. Un byte - Almacena números del cero hasta el 255).
Si se quiere guardar un número más grande, se disponibiliza una celda más (se va multiplicando los números por 256).
Cuanto más bytes se agregan, más números se pueden representar, pero menos cantidad.

Fragmentación de la memoria (se encarga de gestionar ésto el OS).
Direcciones de memoria: Cada celda está representada por un número. Al ser números grandes, se usa la notación hexagecimal (base 16).

Punteros
	1) Es una variable que solamente puede contener direcciones de memoria (direcciones de memoria de otras variables). */

# include <stdio.h>

int main() {
	int number = 109;
	// Definición de puntero. Puntero a una variable de tipo entero.
	int * pointToNumber = &number;

	// printf("%p\n", pointToNumber);
	// %p indica que se está recibiendo un puntero.
	// printf("%p\n" &number) Se puede averiguar la posición de memoria con el &.

	// Desreferenciar el puntero: Acceder a la posición de memoria apuntada por el puntero.
	printf("%p %d\n", pointToNumber, *pointToNumber); // Se accede al contenido de la dirección de memoria.
}

