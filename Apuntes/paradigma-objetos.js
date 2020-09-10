/* Orientación a objetos: Observar los problemas en forma de objetos. 

        Paradigma: Teoría que suministra la base y modelo para resolver los problemas.
        Se compone de cuatro elementos:
            a) Clases.
            b) Propiedades.
            c) Métodos.
            d) Objetos.

        Las clases se componen de propiedades y métodos, que en conjunto, componen un objeto.

        Se compone de cuatro pilares:
            a) Encapsulamiento.
            b) Abstracción.
            c) Herencia.
            d) Polimorfismo.

Diagramas de modelado.

        OMT (1991) --> Object Modeling Techniques. Metodología para el análisis orientado a objetos. Nos propone, que una vez que tenemos identificados
        los objetos, sus atributos, sus métodos, y le hayamos puesto nombre a cada objeto, se empiece a plasmar cada objeto en un recuadro, y con una serie
        de conectores, comenzar a definir la relación de un objeto con otro.  


        UML (1991) --> Unified Modeling Language. Lenguaje de modelado unificado.
            a) Clases.
            b) Casos de uso. 
            c) Objetos.
            d) Actividades.
            e) Iteración.
            d) Estados.
            e) Implementación.

Objetos.

        1) Cuando tengamos un problema, lo primero que debemos identificar son OBJETOS.
            a) Objetos: Son aquellos que tienen propiedades y comportamientos. Siempre serán SUSTANTIVOS. Pueden ser FÍSICOS o 
            CONCEPTUALES.
                1) Físico: Algo que se puede tocar.
                2) Conceptual: Algo que no se puede tocar, pero puede tener atributos, comportamientos.
            b) Propiedades: También pueden llamarse ATRIBUTOS, serán sustantivos. Son todas las características que componen al OBJETO.
            c) Comportamiento: También puede ser llamado MÉTODO. Serán todas las operaciones del objeto. Suelen ser verbos, o sustantivos y verbos.

Clases.

        Clase: Es el modelo sobre el cuál se construirá nuestro objeto.
        Permiten generar más objetos.
        (Se analizan OBJETOS para crear CLASES).

        Abstracción: Análisis para crear una clase. Cuando se abstraen las características de un objeto para generar una clase.

Modularidad.

        Va de la mano con el DISEÑO MODULAR: Subdivir un sistema en partes más pequeñas, que se llamarán MÓDULOS.
        Pueden funcionar de manera independiente, y ayudan a componer un programa.

        Ventajas:
            a) Reutiizar código.
            b) Evitar colapsos.
            c) Mantenible.
            d) Legibilidad.
            e) Resolución rápida de problemas.

        Las clases provocan la modularidad:

            a) Modularidad.
            b) Divide el programa en diferentes partes o módulos/clases.
            c) Separarlas clases en archivos.

UML y sy sintáxis en código.

        Se representa en un cuadrado.
    
                Nombre Clase (Identidad)

                    Atributo 1
                    Abributo 2  (Estado)
                    Abributo 3
                    Abributo N

                    Operación 1
                    Operación 2 (Comportamiento)
                    Operación 3
                    Operación 4

            Ejemplo:

                Clase Person

                    Name

                    walk()

¿Qué es la HERENCIA?

        Filosofía del código: DON'T REPEAT YOURSELF (DRY).

            a) Promueve la reducción de duplicación de código en programación.
            b) Toda pieza de información nunca debería ser duplicada debido a que la duplicación incrementa
            la dificultad en los cambios y evolución.

        Reutilización

            Herencia: Permite crear nuevas clases a partir de otra. Si se encuentran elementos iguales, hay que recurrir
            a la abstracción.
            Existe una jerarquía, una relación de padre a hijo.

                Al elemento padre, se lo conoce como SUPER CLASE.
                A la clase hija, se la conoce como SUB CLASE.

Objetos, método constructor y sus sintáxis en código.

        Los objetos ayudan a crear instancias en las clases (es una instancia en una clase).
        El objeto es el resultado de lo que se modeló, con los parámetros que se dejaron declarados.
        "()" --< Representan métodos, acciones. 
        Métodos constructores: Se escriben en mayúscula, y tienen el mismo nombre de la clase.
            a) Dar un estado inicial al objeto. Cuando se crea un objeto, automáticamente cobra vida en memoria, y se crea un estado inicial del
            objeto; pero podemos añadirle ciertos datos al objeto mediante el método constructor para poder inicializarlo.
            b) Tiene el mismo nombre de la clase.
            c) Son los parámetros mínimos que necesita el objeto para que pueda vivir.

Encapsulamiento.

        Para que un dato permanezca inviolable, inalterable, se le asigna un modificador de acceso.

        Modificadores de acceso:

            a) PUBLIC: Todas las clases.
            b) PROTECTED: Clases, paquetes y subclases.
            c) DEFAULT: Clases y paquetes.
            d) PRIVATE: Clases.

Polimorfismo.

        Método que se comparte en varias clases, pero cada una le da el comportamiento que necesita.
        -Muchas formas.
        -Construir métodos con el mismo nombre pero con comportamiento diferente.











*/