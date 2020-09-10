/* ¿Qué hace un JS Engine?
    1) Recibe código fuente.
    2) Parsea el código y produce un Abstract Syntax Tree (AST).
    3) Se optimiza a machine code y se reemplaza el código fuente. 
El bytecode, es el código que se va estar ejecutando, y produce código ejecutado. 

Cuando se está ejecutando, hay un "observador" que va a "estar tomando notas". Cuando tiene suficientes, 
toma las decisiones necesaruas para optimizar el código. Si las observaciones llegan a ser falsas, se 
pasa una versión "desoptimizada". 

Bytecode
    1) Código parecido al assembly (lenguaje muy bajo nivel, pero que sigue teniendo palabras clave que le
    dicen al procesador qué hacer).
    2) Portátil.
    3) Ejecutado por una virtual machine. En lugar de correr sobre un procesor, corre sobre una virtual machine.

Machine code 
    1) Binario. Es lo más bajo nivel.
    2) Instrucciones específicas a una arquitectura o procesador. 
    
V8
Cuando corre sobre éste motor, traduce el código a machine code. 

Profiler (programa por medio del bytecode y el optimizador)
Toma observación de la ejecución del bytecode, y hace algunas optimizaciones. 

it a hot function -> Función lista para ser optimizarla. 

Los motores de JS difieren dependiendo del browser; cada uno tiene su propia implementación, aunque todos siguen un hilo común.

SpiderMonkey (Firefox)
Tene dos capas de optimización

Chakra (Edge)
Tene dos capas de optimización

JavascriptCore (Safari)
Tres capas de optimización. */