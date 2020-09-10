/** typedef: Crear tipos de datos con sentido conceptual. */
# include <stdio.h>
# include <string.h>
# include <stdlib.h>

typedef char NAME[100];
typedef int AGE;

struct PERSON {
	NAME name;
	AGE age;
};

void fillPersonData(struct PERSON *person, const char *name, int age) {
	if(strlen(name) < 100) {
		strcpy(person -> name, name);
	}

	person -> age = age;
}

int main(int argc, const char *argv[]) {
	struct PERSON person;

	if(argc < 3) {
		printf("Indique nombre y edad por favor. \n");
	}

	fillPersonData(&person, argv[1], atoi(argv[2]));

	printf("El nombre es %s y la edad es de %d.\n", person.name, person.age);
}

