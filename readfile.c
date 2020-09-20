# include <stdio.h>
# include <stdlib.h>
# include <string.h>

int main(int argc, const char *argv[]) {
    FILE *fp = fopen(argv[1], "r"); // Leer un archivo.
    // Permite trabajar con sistema de archivos.
    /** fopen(): Abre un archivo. El primer argumento es el archivo a leer, el segundo, el modo.
     * fgetc(): Lee caracteres de un archivo abierto.
     * EOF: Constante. End of File.
    */
    FILE *out; // Escribir un archivo.

    char c;
    char buffer[100];

    if(!(out = fopen(argv[2], "w"))) {
        printf("No puedo escribir el archivo %s.\n",  argv[2]);
        return -1;
    }

    while((c = fgetc(fp)) != EOF) {
        printf("%c", c);
    }

    do {
        printf("Ingrese una palabra: ");
        scanf("%99s", buffer);
        fputs(buffer, out); // Actualiza/escribe el archivo abierto.
        fputs("\n", out);

        printf("Palabra grabada. ¿Querés grabar otra? (S/N)");
        scanf("%1s", buffer);
    } while(buffer[0] != 'N');

    fclose(fp); // Libera recursos.
    fclose(out); // Importante cerrarlo para que el programa guarde los cambios en el disco.

    return 0;
}