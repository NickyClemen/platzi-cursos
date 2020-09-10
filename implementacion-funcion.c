# include <stdio.h>
// Función sin retorno ni argumentos.
void demo(void);
// Función sin retorno y argumentos.
void add(int a, int b);
// Función con retorno y parámetros.
int sum(int a, int b);

int main() {
	demo();
	add(100, 100);
	printf("El resultado de la suma es de %d.\n", sum(100, 100));

	return 0;
}

void demo() {
	int a, b, sum;

	a = 100;
	b = 100;

	sum = a + b;

	printf("El resultado de la suma es %d.\n", sum);
}

void add(int a, int b) {
	int add = a + b;

        printf("El resultado de la suma es %d.\n", add);
}

int sum(int a, int b) {
	int sum = a + b;
	return sum;
}
