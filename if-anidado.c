# include <stdio.h>

int opt1 = 1;
int opt2 = 0;

int main() {
	printf("Bienvenido al Store.\n");
	printf("Presione cero para bebidas.\n");
	printf("Presione uno para comidas.\n");
	printf("Presione dos para postres.\n");

	if(opt1 == 0) {
		printf("Eligió la opción cero. Verá el menú de bebidas; elija una.\n");
		printf("Opción cero: Coca Zero.\n");
		printf("Opción uno: Coca Cola.\n");
		printf("Opción dos: Aquarius.\n");

		if(opt2 == 0)
			printf("Elegiste Coca Zero.\n");
		else if(opt2 == 1)
			printf("Elegiste Coca Cola.\n");
		else if(opt2 == 2)
			printf("Elegiste Aquarius.\n");
		else
			printf("Elección inválida.\n");
	} else if(opt1 == 1) {
		printf("Eligió la opción uno. Verá el menú de comidas; elija una.\n");
        	printf("Opción cero: Pastel de papas.\n");
		printf("Opción uno: Ravioles con salsa.\n");
		printf("Opción dos: Ñoquis del veintinueve.\n");

		if(opt2 == 0)
			printf("Elegiste pastel de papas.\n");
 		else if(opt2 == 1)
            		printf("Elegiste ravioles con salsa.\n");
        	else if(opt2 == 2)
        		printf("Elegiste ñoquis del veintinueve.\n");
        	else
            		printf("Elección inválida.\n");
	} else if(opt1 == 2) {
		printf("Eligió la opción dos. Verá el menú de postres; elija una.\n");
        	printf("Opción cero: Torta.\n");
        	printf("Opción uno: Helado.\n");
        	printf("Opción dos: Flan.\n");

        	if(opt2 == 0)
           		printf("Elegiste torta.\n");
        	else if(opt2 == 1)
			printf("Elegiste helado.\n");
		else if(opt2 == 2)
            		printf("Elegiste flan.\n");
        	else
            		printf("Elección inválida.\n");
	} else
		printf("Opción inválida.\n");

	return 0;
}
