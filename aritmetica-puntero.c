/** Decremento e incremento de punteros.
Hay que tener cuidado, porque se podría estar pisando una dirección de memoria que no nos pertenece. */
# include <stdio.h>

int main() {
	int number = 5;
	int *pnum = &number;
	char ch = 'A';
	char *pch = &ch;

	printf("Antes del incremento, pnum = %p, y pch = %p\n", pnum, pch);

	pnum++; // Cada posición de un entero, son 4 bytes.
	pch++; // Cada posición ocupada por un char, es de 1 byte. Apunta al siguiente byte en el que haya un char (omite el entero).

	printf("Después del incremento, pnum = %p, y pch = %p\n", pnum, pch);
}
