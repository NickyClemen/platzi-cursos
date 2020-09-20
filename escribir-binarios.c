# include <stdio.h>
# include <stdlib.h>

struct Person {
    char name[100];
    unsigned char age;
};

int main(int argc, const char *argv[]) {
    FILE *out;
    char buffer[100];

    if(argc < 2) {
        printf("Indique el nombre del archivo de salida.\n");
        return -1;
    }

    if(!(out = fopen(argv[1], "w"))) {
        printf("No se puedo escribir en el archivo %s.\n", argv[1]);
        return -1;
    }

    struct Person person;

    do {
        printf("Ingrese el nombre de la persona: \n");
        scanf("%99s", person.name);

        printf("Ingrese la edad de la persona: \n");
        scanf("%d", &(person.age));

        fwrite(&person, sizeof(struct Person), 1, out); /** Escribe un archivo en binario.
        Primer argumento: Puntero a la información que
        se quiere guardar.
        Segundo parámetro: Bytes que se quieren guardar.
        Tecer parámetro: Cuántas copias quiero guardar.
        Cuarto parámetro: Dónde quiero guardarlo. */

        printf("Persona grabada. ¿Querés grabar otra? (S/N)");
        scanf("%1s", buffer);
    } while(buffer[0] != 'N');

    fclose(out);

    return 0;
}