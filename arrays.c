# include <stdio.h>

/** Arrays (arreglos o vectores). Van de 0 a (n -1).
Un array es un puntero, pero no todo puntero es un array.
Se hacen tres cosas:
	1) Reserva de memoria.
	2) Creación de un puntero.
	3) Asignación del puntero: Se apunta a la dirección de memoria de la primera posición del array.
		int a[10];
		a[5] = *(a + 5) -> Se utiliza la aritmética de punteros para sumar cinco posiciones a la primera posición del array, y uan vez que se tiene
		la posición, se desreferencia. */

int main() {
	int array[5];
	for(int i = 0; i < 5; i++) {
		array[i] = i * 2;
	}

	for(int i = 0; i < 5; i++) {
		printf("array[%d] = %d\n", i, array[i]);
	}

	return 0;
}
