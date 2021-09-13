package main

import "fmt"

type Employee struct {
	id int
	name string
	vacation bool
}

func NewEmployee(id int, name string, vacation bool) *Employee {
	return &Employee{
		id: id,
		name: name,
		vacation: vacation,
	}
}

func main() {
	eUno := Employee{}
	fmt.Printf("%v\n", eUno)

	eDos := Employee{
		id: 1,
		name: "Name",
		vacation: true,
	}

	fmt.Printf("%v\n", eDos)

	eTres := new(Employee)

	eTres.id = 2
	eTres.name = "Name"

	fmt.Printf("%v\n", *eTres)
	// Retorna una referencia al objeto. Para ver el valor, hay que usar el "*".

	eCuatro := NewEmployee(3, "Name", false)
	fmt.Printf("%v\n", eCuatro)
}