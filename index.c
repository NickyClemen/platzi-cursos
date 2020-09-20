/** El lenguaje C
    1) Propósito general: No está diseñado para un problema específico. Se puede usar C para
    resolver cualquier cosa.
    2) Compilado: Traduce el lenguaje a binario. Hay dos maneras de hacerlo:
        a) Interpretada. Traducción en tiempo real (línea por línea). Los lenguajes interpretados suelen ser un poco
        más flexibles.
        b) Compilada: Primero se lee todo el programa, se genera un archivo en binario y después se ejecuta. Los programas
        compilados suelen ser robustos y eficientes (velocidad de ejecución).
    3) Nivel intermedio: Abstracción: Cuánto podemos olvidarnos de que el programa lo va a correr una PC, y centrarse a resolver
    el problema. 
Dennis Ritchie: Creador de C. Se creó para poder crear lógica para resolver problemas de compatibilidad de hardware.
Hoy en día, se usa en situaciones que se necesita sacar máximo provecho al hardware.
    1) Sistemas operativos.
    2) Sistemas embebidos.
    3) Sistemas en tiempo real.
    
Lenguajes basados en C:
    1) C++
    2) C#
    3) Java
    4) Javascript
    5) PHP
    
Path: C:\Program Files (x86)\CodeBlocks

Estructura de un programa en C 
DIRECTIVAS DE PRE-COMPILADOR: Instrucciones que se le van al compilador para determinar el proceso de traducción.
DEFINICIÓN DE FUNCIONES
DEFINICIÓN DE TIPOS DE DATO

int main() {} -> Función que se invoca cuando se ejecuta el programa.
gcc helloworld.c -o helloworld (el -o dice como se va a llamar el archivo compilado). 

Tipos de datos
    1) Básicos o primitivos: Nos dice cuánta memoria ocupa un dato, o qué tipo de operaciones
    se puede hacer.
        a) Numéricos:
            1) int: Enteros.
            2) float: Decimales. 
        b) Datos alfanuméricos:
            1) char: Un caracter.
            2) String: Cadenas de caracteres.
            Muy importante la diferencia entre comilla simple (caracteres individuales), y la comilla doble
            (cadenas de caracteres).

    1 - int - V
    0 - int - F
    'N' - char - V
    'z' - char - V
    "Hola" - String - V
    2.5902 - float - V
    Todas éstas expresiones, se conocen como literales (están escritas para entender qué estamos viendo).

    boolean: Para C, una expresión que evalúa como 0, es falsa. Y cualquiera que no sea 0, es verdadero.

Operadores: Símbolos que expresan operaciones.
Se clasifican depende de la cantidad de operandos.
    1) Binarios (dos o más):
        a) +
        b) -
        c) x
        d) /
    2) Unarios (sobre uno):
        a) 1 
Segúnsu función
    1) Aritméticos: Hacer cuentas.
    2) Lógicos: Condiciones.
    3) Bit a bit: 

Operadores
+ - Dos operandos - Tipo aritmético - Suma.
- - Dos operandos - Tipo aritmético - Resta
++ - Un operando - Tipo artimético - Incremento
-- - Un operando - Tipo artimético - Decremento
! - Un operando - Lógico - Negación
&& - Dos operandos - Lógico - AND
|| - Dos operandos - Lógico - OR
^^ - Dos operandos - Lógico - XOR
& - Un operando - Bit a bit - AND
| - Un operando - Bit a bit - OR
^ - Un operando - Bit a bit - XOR

Variables
Se utilizan para almacenar en memoria datos temporalmente. A igual que las expresiones, tiene asociado un tipo de dato. 

¿Qué es un struct? 
Un struct es un mecanismo para definir nuevos tipos de datos complejos o estructurados.
Se usa cuando tienes que guardar datos correlacionados, por ejemplo, todos los referidos a una persona.
Cuando tienes que manejar muchas personas y de todas ellas quieres recabar la misma información, tiene mucho sentido armar una estructura
a partir de la cual puedas crear nuevas variables.
En el caso de C, los structs son un modo muy interesante de crear tus propios tipos de datos, ya sea combinando los tipos primitivos o,
incluso, utilizando otros structs.

CONST
Es un modificador de un tipo de datos. Lo que indica const, es que el contenido de la variable no podrá ser sobreescrito.
Este tipo de aclaración tiene especial relevancia cuando se trabaja con punteros.
La diferencia entre char * c y const char * c,  es que en el primer caso nada me impide hacer algo como *c = ‘B’, mientras que en el segundo,
obtendré un error.
Se trata de un mecanismo de seguridad más (seguridad en el sentido de asegurarnos que nuestro programa no escribe donde no debe). */
