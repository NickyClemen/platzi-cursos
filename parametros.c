# include <stdio.h>
/** Por default, las funciones pasan los parámetros por valor: Crea una copia de la variable que se está pasando, y en la copia temporal, almacena el nuevo valor; no se modifica directamente la variable original.
Pasaje por referencia: Ir al espacio de memoria, y cambiar los valores.
Para pasar por referencia, se puede usar punteros, que pasa la dirección de memoria de la variable para modificar la variable. */
int power(int base, int n);

int main() {
	int n = 3;

	printf("n es igual a %d.\nEl resultado de la potencia es de %d.\n", n, power(2, n));

	return 0;
}

int power(int base, int n) {
	int p;

	for(p = 1; n > 0; n--) {
		p *= base;
	}

	return p;
}
