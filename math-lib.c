#include <stdio.h>
#include <math.h>

int x;
float seno;
float coseno;

int main() {
	printf("Ingrese el valor de x:\n");
	scanf("%d", &x); // Recibe un valor de entrada. '&x' asigna el valor a la variable.

	seno = sin(x); // Seno.
	coseno = cos(x); // Coseno.

	printf("El valor ingresado es %d.\n", x);
	printf("El seno de X es de %d.\n", seno);
	printf("El coseno de X es de %d.\n", coseno);

	return 0;
}
