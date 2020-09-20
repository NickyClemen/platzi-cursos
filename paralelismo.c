# include <stdio.h>
# include <stdlib.h>
# include <string.h>
# include <sys/types.h>
# include <sys/wait.h>
# include <unistd.h>

int main(int argc, const char *argv[]) {
    int shared = 2;
    // Se crea una variable con el número de identificación del proceso.
    int pid = fork(); // pid = Process ID.
    /** Fork: Divide el proceso principal en subprocesos que se ejecutan en paralelo.
     * En el fork, se crea una copia del código en ejecución para crear un nuevo proceso,
     * por lo que las variables también son copias (cada proceso tiene su propia versión de la variable). */

    if(pid) {
        shared = 1;
        // Si retorna un PID distinto de 0, se está ejecuntando el proceso padre.
        printf("Luke, I am your father. shared = %d.\nMy PID is %d and your PID is %d.\n", getpid(), pid, shared);
        // getpid devuelve el propio PID. El del hijo, lo da la funciṕn fork.
        wait(NULL); // Con el NULL, se indica que se espera que todos los subprocesos terminen.
        printf("I'm Darth Vader. shared = %d.\n", shared);
    } else {
        shared = 0;
        printf("I'm Luke. My PID is %d. shared = %d.\n", getpid(), shared);
        sleep(2); // Detiene el programa por la cantidad de segundos indicados.
    }

    /** wait permite al proceso padre esperar que se ejecuten todos los procesos hijos para continuar
    la ejecución. */

    // while(1);

    return 0;
}