package main

import (
	"fmt"
	"strconv"
	"time"
)

/* 1) Lenguaje compilado.
2) Potente librería standard.
3) Fuertemente tiapdo.
4) Manejo de concurrencia por GoRoutines y Channels.
5) Diseñado por Google. Ken Thompson (Unix) es su diseñador.
6) Muy popular en aplicaciones de backend y CLI.
7) Docker. Kubernetes y Terraform están escritos en Go.
8) Muy utilizado para escribir malware.
9) Muchos proyectos de la CNCF (Cloud Native Computing Foundation)
están escritos en Go. */

func main() {
	// Declaración de variables explícita.
	var x int
	x = 8

	fmt.Println(x)

	// Declaración implícita de variables.
	y := 7
	fmt.Println(y)

	// Puntero.
	g := 25
	fmt.Println(g)

	h := &g // "&" Accede a la dirección de memoria (referencia).
	fmt.Println(h)
	fmt.Println(*h) /* "*" accede al valor almacenado en esa
	dirección de memoria. */

	// Map.
	m := make(map[string]int)
	m["Key"] = 6
	fmt.Println(m["Key"])

	// Slice.
	s := []int{1, 2, 3}

	// Recorrer un slice.
	for i, value := range s {
		fmt.Println(i)
		fmt.Println(value)
	}

	// Agregar un valor al final del slice.
	s = append(s, 16)

	// No hay manejo de errores. Se hace de manera explícita.
	myValue, err := strconv.ParseInt("7", 0, 64)

	if err != nil {
		fmt.Printf("%v\n", err)
	} else {
		fmt.Println(myValue)
	}

	// Crear un channel. Comunica las diferentes routines.
	c := make(chan int)

	go doSomething(c) // Crea la rutina, pero no la monitorea.

	<- c
}

func doSomething(c chan int) {
	time.Sleep(3 * time.Second)

	fmt.Println("Done...")

	c <- 1
}