# include <stdio.h>
# include <stdlib.h>
# include <sys/socket.h>
# include <netinet/in.h>
# include <arpa/inet.h>
# include <string.h>

int main(int argc, const char *argv[]) {
    if(argc > 2) {
        char buffer[100];
        const char *ip; // Dirección IP.
        int clientSocket, numBytes, port;
        /** socket del cliente, número de bytes enviados/recibidos, puerto. */

        port = atoi(argv[2]);
        ip = argv[1];

        struct sockaddr_in server;

        if(inet_pton(AF_INET, argv[1], &server.sin_addr) <= 0) {
            printf("La IP %s no es válida.\n", ip);
            return -1;
        }

        printf("Abriendo el socket del cliente.\n");

        if((clientSocket = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
            printf("No se pudo abrir el socket.\n");
            return -2;
        }

        server.sin_family = AF_INET;
        server.sin_port = htons(port);
        bzero(&(server.sin_zero), 8);

        printf("Conectando a %s:%s.\n", argv[1], argv[2]);

        if(connect(clientSocket, (struct sockaddr *) &server, sizeof(struct sockaddr)) == -1) {
            printf("No se pudo conectar al servidor.\n");
            return -3;
        }

        printf("Recibiendo información...\n");

        if((numBytes = recv(clientSocket, buffer, 100, 0)) == -1) {
            printf("Hubo un error en la lectura.\n");
            return -4;
        }

        buffer[numBytes] = '\0';

        printf("El servidor envío el mensaje '%s'. \n", buffer);

        shutdown(clientSocket, 2);
    } else {
        printf("Por favor, indique la IP del servidor y puerto.\n");
        return -5;
    }

    return 0;
}