package main

import (
	"fmt"
	"github.com/donvito/hellomod"
	hello "github.com/donvito/hellomod/v2"
)

func main() {
	/* go mod init github.com/[github username]/[module name] -> Inicializa el módulo.
		go.mod -> Tiene los módulos instalados en el proyecto.
		go.sum -> Hace un versionado de los paquetes que se instalan.
		go mod tidy -> Elimina los módulos que no se usan (las descargas son agregadas a un caché).
		go mod download json -> Te da la dirección de la carpeta de caché.
	go get [module} -> Instala el módulo. */
	fmt.Println("Hello World!")
	hellomod.SayHello()
	hello.SayHello("Nicole\n")
}