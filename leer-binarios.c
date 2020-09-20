# include <stdio.h>
# include <stdlib.h>

struct Person {
    char name[100];
    unsigned char age;
};

int main(int argc, const char *argv[]) {
    FILE *in;

    if(argc < 2) {
        printf("Indique el nombre del archivo de entrada.\n");
        return -1;
    }

    if(!(in = fopen(argv[1], "r"))) {
        printf("No se puedo leer el archivo %s.\n", argv[1]);
        return -1;
    }

    struct Person person;

    while(fread(&person, sizeof(struct Person), 1, in)) {
        printf("%s tiene %d años.\n", person.name, person.age);
    } /** rfead() lee el binario, y lo guarda en un lugar especificado. */

    fclose(in);

    return 0;
}