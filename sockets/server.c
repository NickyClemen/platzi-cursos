# include <stdio.h>
# include <stdlib.h>
# include <sys/socket.h>
# include <netinet/in.h>
# include <arpa/inet.h>
# include <string.h>
/** Sockets: Comunicación punto a punto bireccional. Se utiliza, por ejemplo, en arquitecturas
 * cliente (rol activo)-servidor (proceso con rol pasivo. Espera a que el cliente solicite una
 * conexión. Una vez que se realiza, ambos pueden enviar y recibir información).
 * Mecanismo para comunicar dos procesos separados entre sí (incluso los que no corren
 * en la misma computadora).
 *
 * struct sockaddr_in {
 *      short in sin_family;
 *      unsigned short int sin_port;
 *      struct in_addr sin_addr;
 *      unsigned char sin_zero[8];
 * } Información referente a las partes que se comunican. Por ejemplo, cuál es su dirección,
 * protocolo que se utiliza, etc.
 *
 * struct sockaddr {
 *      unsigned short sa_family;
 *      char sa_data[14];
 * } Información más reducida sobre el endpoint (IP de los que se comunican).
 *
 * int socket(int domain, int type, int protocol); Permite crear un socket.
 * int bind(int sockfd, cosnt struct sockaddr *myaddr, int addrlen); Asocia el sockets a un puerto.
 * int listen(int s, int backlog); Asocia el puerto con una conexión. Acepta conexiones de un cliente,
 * y las va agregando a una cola.
 * int accept(int sockfd, struct sockaddr *addr, socklen_t addrlen); Acepta una conexión para darle
 * servicio.
 * ssize_t send(int sockfd, const void *buf, size_t len, int flags); Envía información al cliente.
 * ssize recv(int sickfd, void *buf size_t len, int flags); Se usa en el cliente para recibir
 * la información del servidor.
 * int shutdown(int socket, int how); Cierra la comunicación. */

int main(int argc, const char *argv[]) {
    if(argc > 1) {
        int serverSocket, clientSocket, longClient, port;
        // ID del socket del server, cliente, longiud del mensaje del cliente, puerto de la comunicación.

        port = atoi(argv[1]);

        struct sockaddr_in server;
        struct sockaddr_in client;

        server.sin_family = AF_INET; // Tipo de protocolo a usar. AF_INET = TCP/IP.
        server.sin_port = htons(port); // Setea el puerto. htons = Formatea el puerto.
        server.sin_addr.s_addr = INADDR_ANY; /** Direcciones que se van a podEr conectar.
        INADDR_ANY = Cualquiera se puede conectar (*). */
        bzero(&(server.sin_zero), 8); // Rellena una línea con un string de ceros. Se necesita para usar sockets.

        if((serverSocket = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
            // socket(familia de procolos a usar, protocolo específico, opcional); SOCK_STREAM = TCP/IP.
            printf("No se pudo abrir el socket.\n"); // Lanza un error.
            return -1;
        } // Crea el socket del servidor para ponerlo en "escucha".

        if(bind(serverSocket, (struct sockaddr *) &server, sizeof(struct sockaddr)) == -1) {
            printf("No se pudo abrir el puerto %s.\n", argv[1]);
            return -2;
        }

        if(listen(serverSocket, 5)) {
            //listen(port, cantidad de clientes que pueden ser atendidos de la cola en forma simultánea).
            printf("No se pudo conectar al servidor.\n");
            return -3;
        }

        longClient = sizeof(struct sockaddr_in);

        printf("Esperando clientes...\n");

        if((clientSocket = accept(serverSocket, (struct sockaddr *) &client, &longClient)) == -1) {
            printf("No se pudo aceptar la conexión.");
            return -4;
        } // Recupera los datos del cliente.

        char str[INET_ADDRSTRLEN];
        inet_ntop(AF_INET, &(client.sin_addr), str, INET_ADDRSTRLEN); // Transforma la dirección en un string.

        printf("Se conectó un cliente desde %s:%d. Bienvenido.\n", str, client.sin_port);

        send(clientSocket, "Bienvenido al servidor.\n", 26, 0); /* El 0 corresponde a flags que se generan en operaciones
        bit a bit para dar más información de la comunicación. */

        printf("El saludo fue enviado.\n");

        shutdown(clientSocket, 2);
        shutdown(serverSocket, 2);
    } else {
        printf("Por favor, indique el puerto.\n");
        return -5;
    } /** Hay un socket del lado del servidor dedicado a escuchar, y un socket por cada cliente que se acepte. */

    return 0;
}