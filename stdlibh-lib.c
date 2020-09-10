#include <stdio.h>
#include <stdlib.h>

int binaryNumber[12], n, i;

int main() {
	system("cls"); // Limpia la consola.
	system("color 9F"); // Cambisa el color de las letras.

	printf("Ingrese un valor decimal:\n");
	scanf("%d", &n);
	printf("Se va a convertir %d a binario.\n", n);

	for(i = 0; n > 0; i++) {
		binaryNumber[i] = n % 2;
		n /= 2;
	}

	printf("El resultado es: ");
	for(i -= 1; i >= 0; i--) {
		printf("%d", binaryNumber[i]);
	}

	return 0;
}
