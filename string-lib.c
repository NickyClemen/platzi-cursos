#include <stdio.h>
#include <string.h>

char *strrev(char *str) {
    // En Linux, no existe strrev. Hay que declararlo.
    char *p1, *p2;

    if (! str || ! *str)
        return str;

    for (p1 = str, p2 = str + strlen(str) - 1; p2 > p1; ++p1, --p2) {
        *p1 ^= *p2;
        *p2 ^= *p1;
        *p1 ^= *p2;
    }

    return str;
}

char* fgets(char *str, int length, FILE * stream); // Es muy peligroso gets po no saber la cantidad de caracteres.

char stringUno[60];
char stringDos[60];

int main() {
	printf("Escribe una frase:\n");
	fgets(stringUno, sizeof(stringUno), stdin); // Obtener un string.
	// strrev(stringUno); // Dar vuelta el string.

    	printf("Escribe otra frase para comparar:\n");
    	fgets(stringDos, sizeof(stringDos), stdin);

    	if(strcmp(stringUno, stringDos) == 0) // Comparar los string. Devuelve 0 si son iguales, y 1 si son diferentes.
    		printf("Ingresaste dos strings iguales.\n");
    	else {
    		strcat(stringUno, stringDos); // Concatena los strings.
    		printf("Los strings son diferentes. Concatenados, el resultado es %s.\n", stringUno);
	}

    	// printf("El string al revés es %s.\n", stringUno);

    	return 0;
}
