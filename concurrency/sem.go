package main

import (
	"fmt"
	"sync"
	"time"
)

func doSomething(i int, wg *sync.WaitGroup, c chan int) {
	defer wg.Done()

	fmt.Printf("ID %d started\n", i)

	time.Sleep(4 * time.Second)

	fmt.Printf("ID %d finished\n", i)

	<- c
}

func main() {
	c := make(chan int, 2) /* Se utilizan para limitar la cantidad de goroutines ejecutadas a la vez (se usa como "semáforo").
	Muy útiles cuando se ejecutan job queues. */
	var wg sync.WaitGroup

	for i:= 0; i < 10; i++ {
		c <- 1

		wg.Add(1)

		go doSomething(i, &wg, c)
	}

	wg.Wait()
}