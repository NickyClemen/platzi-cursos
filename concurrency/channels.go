package main

import "fmt"

func main() {
	c := make(chan int, 3) // make recibe un size por parámetro. Si no se le declara nada, por default es 0.
	/* Channel sin buffer (unbuffered channel) -> Cuando se trabaja con este tipo de channel, hay que estar seguros que hay una goroutine
	recepcionando lo que se envíe a través de él (tiene que ser de manera instantánea).
	Channel con buffer (buffered channel): No bloquea el programa porque tiene una capacidad definida para almancenar elementos (una cantidad
	limitada pre establecida). No tiene que haber otra rutina esperando antes de que el programa decida bloquearse. */

	c <- 1 // El programa se bloquea esperando que haya goroutine que reciba ese mensaje, al no tener buffer el channel.
	fmt.Println(<-c)
}