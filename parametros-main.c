# include <stdio.h>
# include <string.h>

/** El main puede recibir argumentos:
	1) Cantidad de argumentos que se le pasa.
	2) Argumentos string (tanto como indique el entero).
El primer parámetro que envía el sistema operativo, es el nombre del programa.
Buffer overflow: Cuando se desborda la capacidad del string. */
int main(int argc, const char *argv[]) {
	/** for(int i = 0; i < argc; i++) {
		printf("Argumento %d = %s.\n", i, argv[i]);
	} */

	char buffer[20];
	char *bufferA = "This will be overwritten.";
	printf("La versión original de bufferA = %s.\n", bufferA);
	strcpy(buffer, argv[1]);
	printf("La nueva versión de buffer = %s.\n", bufferA);

	return 0;
}
