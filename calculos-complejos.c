# include <stdio.h>
# include <stdlib.h>
# include <string.h>
# include <math.h>
# include <time.h>

int main(int argc, const char *argv[]) {
    int a, b;

    time_t oneDay = 24 * 60 * 60, today = time(NULL), nextDate;
    // time_f para inicializar una fecha.
    nextDate = today + oneDay * atoi(argv[3]);

    // Generar números aleatorios.
    // Inicializador. Se le pasa la hora actual.
    srand(time(NULL));

    a = atoi(argv[1]);
    b = atoi(argv[2]);

    printf("La hipotenusa mide %.2f.\n", sqrt(pow(a, 2) + pow(b, 2)));
    // %.2f: Dos espacios decimales.
    /*** sqrt: Calcula raíces cuadradas.
    pow: Potencia.
    Para compilar, hay que agregar -lm */

    // Muestra el número aleatorio que se generó.
    printf("%d\n", rand());
    printf("%s\n", ctime(&nextDate));
    // ctime()_ Toma una estructura time_t y la convierte en un string.

    return 0;
}