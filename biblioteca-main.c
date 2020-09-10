# include <stdio.h>
# include <stdlib.h>
# include "biblioteca.h"

int main(int argc, const char *argv[]) {
	hello(argv[1]);

	return 0; // El linker se encarga de juntar los binarios sueltos.
}
