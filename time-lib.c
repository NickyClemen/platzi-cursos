/** epoc time: Fecha arbitraria. Ayuda a que los programas tengan un standard en fechas. Se toma el tiempo que pasó en segundos, desde el 01/01/1970 a las 0:00. */
#include <stdio.h>
#include <time.h>

time_t seconds;
time_t begin, end;

int main() {
	long i;
	begin = time(NULL);

	for(i = 0; i < 1500000000; i++);

	end = time(NULL);

	printf("El tiempo que duró nuestro FOR es de %f.\n", difftime(end, begin));
	/** seconds = time(NULL); // Guarda la hora en epoc. Guarda el tiempo a la fecha.
	printf("El número de horas desde epoc, es de %ld.\n", seconds / 3600); */

	return 0;
}
