package main

import (
	"fmt"
	"sync"
	"time"
)

func doSomething(i int, wg *sync.WaitGroup) {
	defer wg.Done() // Le resta uno al contador.

	fmt.Printf("Started %d\n", i)
	time.Sleep(2 * time.Second)
	fmt.Println("End...")
}

func main() { // Si no se agrega el WaitGroup, la rutina principal no va a monitorear la subrutina.
	var wg sync.WaitGroup // Inicializa el wait group. Se lo pasa como parámetro a las funciones.

	for i := 0; i < 10; i++ {
		wg.Add(1) // Cada vez que se lanza una subrutina nueva, se garega uno al contador.
		go doSomething(i, &wg)
		/* WaitGroup es como un "contador". */
	}

	wg.Wait() // Bloquea el programa hasta que el waitgroup esté en cero.
}