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
	endDate string
}

func (frEmployee FullTimeEmployee) getMessage() string {
	return "Full Time Employee."
}

type TemporatyEmployee struct {
	Person
	Employee
	taxRate int
}

func (tEmployee TemporatyEmployee) getMessage() string {
	return "Temporary Employee."
}

type PrintInfo interface {
	getMessage() string
}

func GetMessage(p PrintInfo) {
	fmt.Println(p.getMessage())
}

func main() {
	ftEmployee := FullTimeEmployee{}
	ftEmployee.id = 5
	ftEmployee.name = "Name"
	ftEmployee.age = 2

	fmt.Printf("%v\n", ftEmployee)

	tEmployee := TemporatyEmployee{}

	GetMessage(ftEmployee)
	GetMessage(tEmployee)
	/* Go no implementa interfaces de manera explícita. */
}