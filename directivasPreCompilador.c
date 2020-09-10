/** Directivas precompilador (preprocesador): Instrucciones al compilador sobre cómo tiene que interpretar el programa.
	1) No ejecutables.
       	2) Tips para el compilador.

	1) include.
	2) define.
	3) ifdef.
	4) ifndef.

*/
# include <stdio.h>
/* El # indica que es una instrucción, lo diferencia del código ejecutable. Incluye otro archivo antes de empezar a compilar.
<stdio.h> es una biblioteca standard (ya viene con la instalación de C). */

int func(int a, int b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
}

int main() {
	int a, b, mayor;
	printf("Hello world, %d!\n", 10);
/** printf: Ésta función toma placeholder (empiezan con un %).
	a) %d: Número entero.
	b) %f: Float.
	c) %c: Caracter.
	d) %s: String. */
	printf("Ingresa un número: \n");
	scanf("%d", &a);
	
	printf("Ingresa otro número: \n");
	scanf("%d", &b);

	mayor = func(a, b);

	printf("El mayor de los dos números es d.", mayor);
}
