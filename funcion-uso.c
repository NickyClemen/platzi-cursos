# include <stdio.h>
// Se declaran las funciones al principio.
int power(int base, int n);

int main() {
	for(int i = 0; i < 10; i++) {
		printf("n es igual a %d. El resultado de la potencia es de %d. \n", i, power(2, i));
	}

	return 0;
}

int power(int base, int n) {
	int p = 1;

	for(int i = 1; i <= n; i++) {
		p *= base;
	}

	return p; // Si no se especifica el return, retorna el primer valor que encuentre.
}
