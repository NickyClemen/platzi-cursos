/** No hay un tipo de dato string (es puntero a carácter). */
# include <stdio.h>

int main() {
	char *name = "Nicole"; /** Se crea un array de caracteres de manera implícita. El puntero apunta a la primera posición. */
	printf("Mi nombre es %s, (%p)\n", name, name);

	for(int i = 0; i < 6; i++) {
		// printf("name[%d](%p) = %c\n", i, name + i, *(name + i));
		printf("name[%d](%p) = %c\n", i, name + i, name[i]);
	}

	return 0;
}
