package main

import "fmt"

type Person struct {
	name string
	age  int
}

type Employee struct {
	id int
}

type FullTimeEmployee struct {
	Person // Campo anónimo. Permiten acceder de manera directa a las propiedades del struct.
	Employee
}

func GetMessage(p Person) {
	fmt.Printf("%s with age %d", p.name, p.age)
}

func main() {
	ftEmployee := FullTimeEmployee{}
	ftEmployee.id = 5
	ftEmployee.name = "Name"
	ftEmployee.age = 2

	fmt.Printf("%v\n", ftEmployee)

	// GetMessage(ftEmployee)
	/* En Go no existe la herencia, sino que se apoya en el principio de la composición. */
}