# include <stdio.h>
# include <string.h>

void ingresarString(char *string) {
	char str[150];

	printf("Ingrese una frase:\n");
	scanf("%s", str);
	strcpy(string, str);
}

int analizarOracion(char *phase, char *ph) {
	if()
}

int main(int argc, const char argv[]) {
	char string[150];
	ingresarString(string);
	printf("%s.\n", string);
}
