/* Parsers y el Abstract Syntax Tree 
Javascript es interpretado.
Cuando llegó Javascript, llegó con Netscape. Antes, se hacían cosas muy simples. 
Lo que se hacía, es que el programa se leía línea por línea.
Esto sigue sucediendo, pero de una manera totalmente nueva.
Ésta nueva manera, llegó con Google Chrome. Necesitaba que su browser fuera más sofisticado, por lo que
reinventó la manera en la que los motores de Javascript se comportan.

¿Qué hace un JS Engine?
    1) Recibe código fuente.
    2) Parsea el código y produce un Abstract Suntax Tree (AST).
    Acá es cuando pasa por el interpretador.
    3) Se compila a bytecode y se ejecuta.
    4) Se optimiza a machine code y se reemplaza el código base. 
Bytecode: Es un lenguaje de más bajo nivel, que va a permitir que el código se ejecute más rápido. 
Mientras se va ejecutando (bytecode), hay un proceso que se llama Profider, que va a estar analizando la ejecución.
Encuentra los puntos en los que el programa se va a optimizar, y produce el machine code (optimazing compiler). 

¿Qué hace un Parser?
    1) Código fuente
        1.1) Parser (Tokens)
    2) Abstract Syntax Tree
Un Parser, toma el código fuente, y lo va a leer, pero lo que está escribiendo, no es lo que la computadora entiende,
por lo que, primero, lo tiene que descomponer, y esos pedazos, componentes que van a salir, se llaman tokens.
Token, por ejemplo, identifica que LET es una palabra clave.
Una vez que se tienen esos Tokens, se compone el ASTree.
¿Qué pasa si en algún momento el Parser no le cuenta sentido a algo?
Un SyntaxError, es lanzado cuando el motor de Javascript se encuentra con partes del código que forman parte de la 
sintaxis del lenguaje al momento de analizar el código (los lenguajes de programación son formales, por lo que son
muy escrictos).
El proceso de Parsing, es muy imporante que se haga bien.
    Google dice:
        1) Parsing es 15-20% del proceso de ejecución. Toda mucho tiempo. Cuánto más grande es el proyecto, más tarda
        en hacer el parsing.
        2) La mayoría del Javascript en una página nunca se ejecuta.
        3) Esto hace que bundling y code splitting sea muy importante. El código tiene que estar bien empaquetado (porciones
        de código separados lógicamente, que se presentan en un momento específico. Se usa mucho en SPA).

Parser de V8 (motor de Google Chrome y el de Node)
Eager Parsing:
    1) Encuentra errores de sintaxis.
    2) Crea AST.
    3) Construye scopes (se sabe qué variables se pueden leer en qué parte del código).

Lazy Parsing (se está retrasando alguna parte del código. No hace falta analizarlo todavía):
    1) Doble de rápido que el eager parser.
    2) No crea el AST.
    3) Construye los scopes parcialmente.

https://esprima.org/

Abstract Syntax Tree (AST)
Es un grafo (estructura de datos) que representa un programa.
Se usa en:
    1) Javascript Engine.
    2) Bundlers: Webpack, Rollup, Parcel.
    3) Linters: ESLint, Prettify.
    4) Type Checkers: Typescript, Flow.
    5) Syntax highlighters.

Estructura en forma de árbol, en dónde el programa es la raíz, y se lo va descompiendo en partes (se usan los tokens).

https://astexplorer.net/

Abstract Syntax Tree en Práctica
https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4

*/