/** printf: Toma un puntero al primer carácter de la cadena, y realiza una copia. Toma el próximo carácter, lo imprime, y avanza el puntero interno
al siguiente. \0 indica el fin de un string (array de caracteres), pero cuenta como un carácter más. */
# include <stdio.h>
# include <string.h> // Librería para trabajar con string.

int main() {
	char *str = "Nicole";
	char *otherStr = "Jessica";
	char name[23] = "Nicole Ordoqui Morales"; // Se permite que el compilador calcule el límite.
	char dst[21] = "Nunca vas a ver esto.";

	printf("Mi nombre es %s\n", name);

	// Función para medir string.
	printf("str mide %ld caracteres.\n", strlen(str)); // %ld es string largo. A slen() se le pasa el puntero del principio del string.
	// Comparar string.
	printf("Los nombres son %s", strcmp(str, otherStr) == 0 ? " iguales.\n" : " distintos.\n"); /** cmp() recibe dos punteros a carácter. Retorna 0 si son
	iguales, -1 si la primera es menor que la segunda, y 1 si la segunda es menor que la primera. */
	// Copiar strings.
	strcpy(dst, str);
	printf("dst = %s. \n", dst);

	return 0;
}
