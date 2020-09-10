/** C es un lenguaje de tipo estructurado (se ejecuta el código en un orden específico). Se pueden utilizar librerías.
No existen objetos y clases (existen los strucs). Se pueden crear funcionen. Soporta recursión. Es fuertemente tipado (tipo de tipado estático).
Lenguaje de nivel intermedio.
Se utiliza mucho en OS, software de aplicaciones, sistemas embebidos.
PLC (Programmable Logic Controller) - microcontroladores.
Fue creado por Dennis Ritchie. Entre 1972 y 1973. El fin fue crear un lenguaje comprensible para programar en Unix, que se pueda utilizar en otros sistemas.
C es compilado (se le dice al compilador a qué sistema está apuntado y genera un ejecutable). Dado que el ejecutable es distinto en cada OS, hay que pensar el
código de manera portable, y siguiendo los standardes de ANSI C. Al ser un lenguaje compilado, permite tener un gran manejo de la memoria,
velocidad en tiempo de ejecución.
Velocidad de ejecución del programa - A menor nivel, más rápido.
(Licencia GLU). Runtime Environment (Node. Traduce Javascript para el sercidor). Java se ejecuta en JVM (Java Virtual Machine).
Nivel más alto - Son los más fáciles de entender por los humanos.
	1) Perl, Python, Shell, Javascript. Scripting - Lenguaje interpretado (se interpreta por su motor).
	2) C, C++ (en lo que está escrito la mayoría de los malware), Alto/medio nivel de lenguaje.
	3) Intel X86, etc. (primera etapa de código legible para humanos). Lenguaje de montaje. Set de instrucciones para CPU.
	4) Representación hexadecimal de la lectura del código binario del sistema operativo. Lenguaje máquina.
	5) Lectura del código binario por el hardware, pero no legible para humanos. Código binario.

01 - 1 bit. Unidad mínima. */

/** Una variable es una definición/nombre que le vamos a dar a un espacio reservado de memoria.
Cada variable va a tener un tipo de dato, lo que define el tamaño y la estructura que se está reservando en memoria.
Se pueden declarar fuera del método main para que tenga alcance global. */

/** Preprocessor commands. Comando de preprocesador (zona dónde se referencian las librerías). Avisa al compilador que agregue esos archivos antes
de compilar. */
# include <stdio.h>

# define PIZZACOST 1.5
const char NEWLINE = '\n';

extern float h; // Con extern, la variable va a quedar disponible para otros archivos.
int a, b, c; // Declaración de variable.
float f, g;

/** Enum: Tipo de dato para almacenar tipo de datos constantes que pertenecen al mismo tipo.
enum weekDays {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
};

enum deck {
	Copa = 0,
	Basto = 5,
	Oro = 10,
	Espada = 15
} card; */

int main() {
	// Definición de variables externas. Hay que redeclararla dentro del programa en el que se va a usar.
	float h;
	float costPizzas;
	float numberOfSlices = 3;
	/* enum weekDays today;
	today = Wednesday;
	card = Basto;

	printf("Hello Platzi.\n");
	printf("Day %d.\n", today + 1);
	printf("Valor de la carta: %d. Pesa %d.\n", card, sizeof(card)); */
	a = 1; // Inicialización de la variable.
	b = 34;
	c = a + b;

	costPizzas = PIZZACOST * numberOfSlices;

	f = -2147483647;
	g = -1000000;
	h = g + f;

	printf("El resultado de la suma es %d.\n", c);
	printf("El resultado de la suma es de %f.\n", h); // En sumas flotantes, no se desbordan los decimales, pero pierde precisión.
	printf("El costo total es de %f. %c", costPizzas, NEWLINE);

	return 0; // Termina la función principal, y la ejecución del programa.
} // Función donde se ejecuta el programa.

/** Basic Types. Almacenar operaciones aritméticos.
 1) Artiméticos
 	Enteros
 	1) char: Almacera carcateres. 1 byte. 128 a 127.
	unsigned char. 0 a 255.
 	2) short. En stardard, es de 2 bytes. -32.768 a 32.767
 	unsigned short 0 a 65.535
 	3) int. De 2 a 4 bytes. -32.768 a 32.767 ó -2.147.483.648 a 2.147.483.647. El standard es un int de 4 bytes.
 	Si no se necesitan los números negativos, se usa unsigned (sin signo).
 	unsigned int. 0 a 65.535 o 0 a 4.294.967.295.
 	4) long. 8 bytes. -9223372036854775808 a 9223372036854775807
 	unsigned log 0 a 18446744073709551615

 	Flotantes (decimales)
 	1) float. 4 bytes. 1.2E-38 a 3.4+38 (6 posiciones decimales).
 	2) double. 8 bytes. 2.3E+308 a 1.7+308 (15 posiciones decimales).
 	3) long double. 10 bytes. 3.4E-4932 a 1.1E+4932 (19 posiciones decimales).
 	No manejan unsigned. */

/** void: Especifica que no hay valor disponible.
	1) Una función retorna tipo de dato void. La función no retorna ningín valor.
		void function() {}
	2) Función con argumentos de tipo void. No acepta parámetros.
		int rand(void) {}
	3) Puntero que va a la dirección en memroia de un objeto, pero no le importa el tipo de dato que tenga.
		void *puntero - Permite hacer casting a cualquier tipo de dato. */

/** Las constantes (llamadas literales), son un tipo de dato que no muta. Se le tiene que designar un tipo de dato.
Se declara con const. Se pueden guardar combinaciones de enteros y caracteres.
	const int COSTHOTDOG = 100u; La u es un sufijo que marca "unsigned". Puede ir en mayúscula. Está "f" (float), "l" (long).
	const float TOTALBILL = 100.57;
	const char NEWLINE = '\n'; // Usarla cuando no tenga alcance global.
# define: Directiva de preprocesador. Ayuda a tener arriba las constantes.
	# define PAPERCOST
String literal: Lo que se puede colocar dentro de dos comillas. Internamente, C lo guarda como array de caracteres. */
