package main

import "fmt"

// Funciones varíadicas: permite recibir n parametros (lo trata como un slice de enteros).
func sum(values ...int) int {
	total := 0

	for _, num := range values {
		total += num
	}

	return total
}

func printNames(names ...string) {
	for _, name := range names {
		fmt.Println(name)
	}
}

// Retornos con nombres.
func getValues(x int) (double int, triple int, quad int) {
	// Se declaran las variables dentro del retorno. El return envía de manera implícita las variables.
	double = 2 * x
	triple = 3 * x
	quad = 4 * x

	return
}

func main() {
	fmt.Println(sum(1, 2, 3))
	printNames("Cirilla", "Ivan", "Nicole")
	fmt.Println(getValues(2))
}