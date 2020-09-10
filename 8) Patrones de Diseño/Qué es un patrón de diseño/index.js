/* Qué es un patrón de diseño.
Los patrones de diseño, son cómo recetas, que resuelven problemas que nos enfrentamos con frecuencia
en el diseño de software.
En específico, son una solución para un problema dentro de un contexto, y éste contexto, debe repetirse.

Una solución para un problema dentro de un CONTEXTO.
    1) El contexto es la situación dónde el patrón aplica.
    2) Éste debe ser recurrente.
    3) Ejemplo: Muchos objetos deben estar interesados en el estado de otro objeto.
    
Una solución para un PROBLEMA dentro de un contexto.
    1) Se refiere a la meta que estas tratando de alcanzar dentro del contexto.
    2) El problema incluye todas las limitaciones que existen dentro de ese contexto.
    3) Ejemplo: Estos objetos quieren recibir notificaciones cuando cambie el estado, sin tener que solicitar la información.

Una SOLUCIÓN para un problema dentro de un contexto.
    1) Un diseño genérico que alcanza la meta dentro del contexto.
    2) Ejemplo: Crear una clase dónde cualquier objeto se puede suscribir y desuscribir a cambios en el estado (Observer Pattern).

Un poco de historia
La idea de los patrones de diseño, comienza en la arquitectura con Christopher Alexander. 
Sus libros (A Pattern Language y The Timeless Way of Building) describen patrones para construir arquitectura dinámica,
como casas, pueblos y ciudades. 

Design Patterns - Elements of Reusable Object-Oriented Software (‎The "Gang of Four"), libro que comenzó el campo de patrones de diseño
de software (publicado en 1995).
Describe los patrones fundamentales. 

Beneficios
    1) Los patrones de diseño son una caja de herramientas de soluciones bien probadas a problemas comunes en diseño de software. 
    2) Te proveen de un lenguaje común que permite comunicarse de forma específica y efivciente. 
    
Crítica
    1) Los patrones de diseño son una forma de complejidad. 
    2) Son soluciones a las limitaciones de un lenguaje de programación. Ejemplo: Java o C# no tienen funciones de alto nivel. 
    3) "Cuando lo que tienes es un martillo, todo te parece un clavo. 
    
Conclusión
    1) Siempre busca pensar en términos de diseño, no de patrones. 
    2) Usa un patrón cuando hay una necesidad natural de usarlos.
    3) Si existe una alternativa más simple, prefierela. */