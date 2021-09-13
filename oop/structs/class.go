package main

import "fmt"

type Employee struct {
	id int
	name string
} /*/ struct es equivalente a las clases. genera "nuevos tipos" de datos
que se pueden utilizar para cumplir tareas en específico.
Cuando se crea el struct, Go inicializa con zero values los
atributos. */

// Receiver functions.
func (e *Employee) SetID(id int) {
	e.id = id
} // e * Employee -> Point receiver
// e Employee -> Value receiver.

func (e *Employee) GetID() int {
	return e.id
}

func (e *Employee) SetName(name string) {
	e.name = name
}

func (e *Employee) GetName() string {
	return e.name
}

func main() {
	e := Employee{1, "Last name"}
	fmt.Printf("%v", e)

	e.id = 0
	e.name = "Name"
	fmt.Printf("%v", e)

	e.SetID(5) // El struct se manda a sí mismo como parámetro.
	e.SetName("Set name")
	fmt.Printf("%v", e)

	fmt.Println(e.GetID())
	fmt.Println(e.GetName())
}