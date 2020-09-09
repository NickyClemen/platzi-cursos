# include <stdio.h>

int main() {
	int n = 10;

	if(n > 10 && n < 20)
		printf("El número es mayor que diez, pero, menor que veinte.");
	else if(n == 10)
		printf("El número es diez.");
	else if(n > 20)
		printf("El número es mayor que veinte");
	else if(n < 10 && n >= 0)
		printf("El número es menor que diez.");
	else
		printf("Error: No hay número.");

	return 0;
}
