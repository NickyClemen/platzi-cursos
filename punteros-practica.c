# include <stdio.h>

void duplicar(int *a) { /** Con a, se pasa el contenido (pasaje por valor). Al pasar un puntero (*a), se hace un pasaje por referencia (se pasa la dirección de
	memoria de la variable). */
	*a *= 2;
	// Se multiplica una copia de la variable a (es local).
}

int main() {
	int a = 5; // a aunta a una dirección de memoria específica.

	printf("Antes de duplicar, a = %d\n", a);

	duplicar(&a); // Se pasa la dirección de a.

	printf("Después de duplicar, a = %d\n", a);
}
