/** Reserva de memoria
	1) Estática: Al momento de escribir el programa, se sabe la cantidad de memoria que hay que reservar.
	Pasa en muy pocos casos; la mayoría require de un manejo dinámico.
	2) Dinámica:
		void *malloc(size_t size);
		void *realloc(void *ptr, size_t size);
		Interactúan con el sistema operativo para solicitar posiciones de memoria en posiciones contiguas.

Memory Leak (goteo de memoria. Perdiendo memoria). En otros lenguajes de más alto nivel, existe el garbage collector que
evista éstos problemas. En C, hay que utilizar mecanismos para "liberar" la memoria, y devolverla al sistema operativo.
	void free(void *ptr);

Valgrind (detector de leaks). */
# include <stdio.h>
# include <stdlib.h>
# include <string.h>

typedef char NAME[100];
typedef char EMAIL[100];

typedef struct {
	NAME name;
	EMAIL email;
} CONTACT;

int main(int argc, const char * argv[]) {
	CONTACT * list = NULL;
	char buffer[100];
	int goOn, listSize = 0;

	do {
		printf("Ingrese el nombre del nuevo contacto:\n");
		scanf("%99s", buffer);
		// Para restringir la entrada de datos.
		if(strcmp("0", buffer) != 0) { // strcmp chequea si se ingresó un cero.
			if(!list) {
				list = malloc(sizeof(CONTACT)); // Se le pasa cuánta memoria se quiere reservar.
				// sizeof devuelve cuanta memoria ocupa un tipo de dato.
			} else {
				list = realloc(list, sizeof(CONTACT) * (listSize + 1)); // Reserva más espacio en memoria.
			}

			strcpy(list[listSize].name, buffer);

			printf("Ingrese el email de %s.\n", buffer);
			scanf("%99s", buffer);

			strcpy(list[listSize].email, buffer);

			goOn = 1;

			listSize++;
		} else {
			goOn = 0;
		}
	} while(goOn);

	printf("Esta es tu lista de contactos.\n");
	printf("Nombre\t\tEmail\n");

	for(int i = 0; i < listSize; i++) {
		printf("%s\t\t%s\n", list[i].name, list[i].email);
	}

	free(list);

	return 0;
}
