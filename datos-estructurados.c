# include <stdio.h>
# include <string.h>
# include <stdlib.h>
/** Las estructuras se crean a partir de tipos de dato primitivos. */
struct PERSON {
	char name[100];
	int age;
};

void fillPersonData(struct PERSON *person, const char *name, int age) {
	if(strlen(name) < 100) {
 		// strcpy((*person).name, name);
 		strcpy(person -> name, name);
     	}

     	(*person).age = age;
}

int main(int argc, const char *argv[]) {
	/** struct {
		char name[100];
		int age;
	} person; */
	struct PERSON person;

	if(argc < 3) {
		printf("Indique nombre y edad por favor.\n");

		return 1;
	}

	fillPersonData(&person, argv[1], atoi(argv[2]));
	/* if(strlen(argv[1]) < 100) {
		strcpy(person.name, argv[1]);
        } */

	// person.age = atoi(argv[2]); // Convierte string en enteros.

	printf("El nombre es %s y la edad es de %d.\n", person.name, person.age);

	return 0;
}
