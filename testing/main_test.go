package main

import "testing"
/* Nombrar un archivo de test -> [file]_test.go
*testing.T -> Permite ingresar a los resultados del testing.
go test -> Corre el test. Para poder correrlo, hay que estar dentro de un module.

Se crea una tabla con test cases.
Las funciones sin test case impacta en el code coverage (muestra las partes que no están siendo alcanzados por los tests).
	go test -cover -> Hace un coverage de las funciones alcanzadas por los tests.
	go test -coverprofile=[filename].out -> Raw que se usa para generar métricas.
	go tool cover -func=[filename].out -> Muestra los porcentajes del archivo de coverage.
	go tool cover -html=[filename].out -> Genera un archivo HTML.

Profiling
	Detectar partes críticas del código para ayudar a corregirlo.
	go test -cpuprofile=[filename].out -> Genera el reporte.
	go tool pprof [filename].out -> Abre el reporte.
		list [function name] -> Muestra el profiling.
		web -> Genera un svg con el reporte.
		pdf -> Exporta el reporte. */

func TestSum(t *testing.T) {
	/* total := Sum(5, 5)

	if total != 10 {
		t.Errorf("Sum was incorrect. Got %d expected %d", total, 10) // Se indica a Go que el test falló.
	} */

	// Tabla de test cases.
	tables := []struct {
		a int
		b int
		n int
	}{
		{1, 2, 3},
		{2, 2, 4},
		{25, 26, 51},
	}

	for _, item := range tables {
		total := Sum(item.a, item.b)

		if total != item.n {
			t.Errorf("Sum was incorrect. Got %d expected %d", total, item.n) // Se indica a Go que el test falló.
		}
	}
}

func TestMax(t *testing.T) {
	tables := []struct {
		a int
		b int
		n int
	}{
		{4, 2, 4},
		{3, 2, 3},
		{2, 5, 5},
	}

	for _, item := range tables {
		max := GetMax(item.a, item.b)

		if max != item.n {
			t.Errorf("GetMax was incorrect. Got %d expected %d", max, item.n) // Se indica a Go que el test falló.
		}
	}
}

func TestFibonacci(t *testing.T) {
	tables := []struct {
		a int
		n int
	}{
		{1, 1},
		{8, 21},
		{50, 12586269025},
	}

	for _, item := range tables {
		fib := Fibonacci(item.a)

		if fib != item.n {
			t.Errorf("Fibonacci was incorrect. Got %d expected %d", fib, item.n) // Se indica a Go que el test falló.
		}
	}
}