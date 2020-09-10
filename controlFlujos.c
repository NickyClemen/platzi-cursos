# include <stdio.h>

/** Estructuras de control de flujo: Permiten definir cómo se mueven los datos por el programa.
	1) Condicionales: Permiten definir si un bloque de código se ejecuta a partir de una condición.
		a) if
		b) switch
	2) Repetitivas:
		a) 0-x: Se ejecuta cuando se valida una condición (while).
		b) 1-x: se ejecuta al menos una vez antes de evaluar la condición.
		La x es porque no se sabe cuánto se va a ejecutar como máximo.
*/
int main() {
	int a = 1; // Operador de asignación.
	int n = 1; //  acum = 10
	int acum = 0;

	// Condicional.
	if(a == 1) {
	// Operador de comparación por igualdad.
		a = 2;
	} else {
		a = 3;
	}

	switch(a) {
		case 1:
			a = 10;
			break;
		case 2:
			a = 20;
			break;
		case 3:
			a = 50;
			break;
		default:
			a = 100;
			break;
	}

	// Repetitiva.
	/**  0-x.
	while(n < 10) {
		acum += n;
		n++;
	}

	return acum; */

	/* 1-x;
	do {
		acum += n;
		n++;
	} while(n <= 10);

	return acum; */

	/** Repetitiva definida: Se utiliza cuando se sabe cuántas veces se quiere ejecutar un ciclo.
		1) for. i -> Variable de control. Indica cuántas vueltas tiene que dar el flujo. */
	for(int i = 0; i < 10; i++) {
		acum += i;
	}

	return acum;
}
