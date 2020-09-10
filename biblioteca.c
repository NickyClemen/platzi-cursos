/** En C, las bibliotecas se dividen en dos archivos:
	1) Encabezados: Declarar funciones, variables, etc.
	2) Implementación: Se desarrolla las funciones. */
# include "biblioteca.h" // Con las comillas se entiende que no es standard, por lo que la va a buscar en el directorio.
# include <stdio.h>

void hello(const char *name) {
	printf("Hola, %s.\n", name);
}
