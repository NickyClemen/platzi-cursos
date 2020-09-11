/** Memory Leak (goteo de memoria. Perdiendo memoria). En otros lenguajes de más alto nivel, existe el garbage collector que
evista éstos problemas. En C, hay que utilizar mecanismos para "liberar" la memoria, y devolverla al sistema operativo.
	void free(void *ptr);

Valgrind (detector de leaks).
    valgrind ./file */
# include <stdio.h>
# include <stdlib.h>

int main() {
    char *p = NULL;

    for(int i = 0; i < 10; i++) {
        printf("%d - Alocando 50 chars.\n");

        if(p) {
            free(p);
        }

        p = malloc(sizeof(char) * 50);
    }

    printf("Terminado\n");

    free(p);

    return 0;
}