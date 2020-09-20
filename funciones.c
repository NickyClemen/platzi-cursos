/** Funciones
Rutinas: Conjunto de instrucciones que se ejecutan con cierta periodicidad. Código reutilizable.
En otros lenguajes, hay difereciencias entre procedimiento y función.
En C, solamente se tiene funciones.
Toda función:
	a) Tiene un tipo de dato de retorno: Resultado de la operación.
	b) Nombre.
	c) Lista de argumentos.
	d) Conjunto de instrucciones. */
int func(int a) {
	return a * 2;
}

int main() {
	return func(5);
	/** main retorna siempre un entero para indicar el estado de la ejecución. Si retorna 0, todo salió bien.
	Si es diferente de 0, hay error. */
}
