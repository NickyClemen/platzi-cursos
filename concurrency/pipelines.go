package main

import "fmt"

/* Pipeline -> Consiste en una cadena de procesos conectados de forma tal que la salida de un elemento es la entrada de otro.
Permiten la comunicación y sincronización entre procesos. Es común el uso de buffer de datos entre elementos consecutivos.
Si no se tiene cuidado al momento de definir los channels, se corre el riesgo de caer en deadlock (bloqueo).
Para mitigarlo, se recomienda definir channels sólo de lectura o escritura. */
func Generator(c chan <- int) { // Poniendo el operador a la derecha se define que es un canal sólo de escritura.
	for i := 1; i <= 10; i++ {
		c <- i
	}

	close(c) // Cierra el channel.
}

func Double(in <- chan int, out chan <- int) { // Poniendo el operador a la izquierda se define que es un canal sólo de lectura.
	for value := range in {
		out <- 2 * value
	}

	close(out)
}

func Print(c <- chan int) {
	for value := range c {
		fmt.Println(value)
	}
}

func main() {
	generator := make(chan int)
	doubles := make(chan int)

	go Generator(generator)
	go Double(generator, doubles)

	Print(doubles)
}
