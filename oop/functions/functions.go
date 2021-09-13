package main

import (
	"fmt"
	"time"
)

func main() {
	x := 5
	y := func() int {  /* 1) Sirven para ser llamadas una sola vez.
		2) Para Goroutines. */
		return x * 2
	}() // Los paréntesis sirven para ejecutar la función.

	fmt.Println(y)

	c := make(chan int)

	go func() {
		fmt.Println("Starting function.")
		time.Sleep(5 * time.Second)
		fmt.Println("Ending function.")

		c <- 1
	}() // Función anónima concurrente.

	<- c
}