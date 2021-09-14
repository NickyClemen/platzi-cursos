package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan int)
	ch := make(chan int)

	d := 4 * time.Second
	dd := 2 * time.Second

	go DoSomething(d, c, 1)
	go DoSomething(dd, ch, 2)

	for i := 0; i < 2; i++ {
		select { // Permite trabajar con channels y saber cuál es el que se ejecuta primero.
			case channelMsg := <- c:
				fmt.Println(channelMsg)

			case channelMssg := <- ch:
				fmt.Println(channelMssg)
		}
	}
}

// Multiplexación -> Ayuda a comunicarse cuando se tienen diferentes canales y se quiere "escucharlos" al mismo tiempo.
func DoSomething(i time.Duration, c chan <- int, param int) {
	time.Sleep(i)

	c <- param
}