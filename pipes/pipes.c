# include <stdio.h>
# include <stdlib.h>
# include <unistd.h> // Librería para llamar fork.
# include <sys/wait.h>
# include <string.h>

# define MSGSIZE 16

int main(int argc, const char *argv[]) {
    /** Pipes: Archivos virtuales en el cuál un proceso escribe, y otro puede leer. Si el proceso lector no encuentra nada,
    se bloquea hasta que aparece la variable. Comunicación bidireccional. */
    FILE *in;
    int pid, pipes[2]; // La función pipe retorna los valores de los pipes.
    // pipes[0] se lee. pipes[1] se escribe.

    if(pipe(pipes) < 0) {
        printf("Los pipes no pudieron ser creados.\n");
        return -2;
    }

    if(!(in = fopen(argv[1], "r"))) {
        printf("No se pudo leer el archivo %s.\n", argv[1]);
        return -1;
    }

    if(pid = fork()) {
        char buffer[MSGSIZE];

        printf("Soy el padre. Voy a leer desde el archivo %s.\n", argv[1]);

        while(fgets(buffer, MSGSIZE, in)) {
            printf("Leí '%s'.\n %d, ¿cuál es el caracter más grande?\n", buffer, pid);

            write(pipes[1], buffer, MSGSIZE); // Se escribe sobre el pipe.
        }

        close(pipes[1]); // Se cierra el pipe.

        printf("A la espera de que terminen los subprocesos.\n");
        wait(NULL);

        fclose(in);
    } else {
        close(pipes[1]);

        char buffer[MSGSIZE], max;

        printf("Soy el hijo. Aguardo que aparezca algo en el pipe.\n", argv[1]);

        while(read(pipes[0], buffer, MSGSIZE) > 0) {
            printf("Leí '%s' desde el pipe.\n", buffer);

            max = buffer[0];

            for(int i = 0; i < MSGSIZE; i++) {
                if(buffer[i] > max) {
                    max = buffer[i];
                }
            }

            printf("El caracter más grande es %c.\n", max);
        }
    }

    return 0;
}