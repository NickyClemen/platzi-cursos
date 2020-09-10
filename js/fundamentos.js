/* Funciones

    var nombre = 'Nicole', edad = 28;

    /* Definir una función.

    function imprimirEdad(){

        console.log(`${nombre} tiene ${edad} años.`);

    }

    imprimirEdad();

    // Pasar parámetros.

    function imprimirEdad(n, e){

        console.log(`${n} tiene ${e} años.`);

    }

    imprimirEdad('Cirilla', 'tres meses'); */

    // Alcance de las funciones.

        var nombre = 'Nicole'; // Variable global: Tiene alcance en todo el programa.

        /* function imprimirNombre(){

            nombre = nombre.toUpperCase();

            console.log(nombre);

        }

        imprimirNombre(); */

        /* La función, al tener acceso a la variable, está teniendo un side effect (efecto de lado). Éste efecto, lo que significa,
        es que al invocar la función va a tener un efecto colateral, es decir, va a modificar variables que no están definidas dentro.
        Es algo que se debería evitar. */

        function imprimirNombre(n){

            n  = n.toUpperCase(); // Variable local: Solamente existe dentro de la función.

            console.log(n);

        }

        imprimirNombre(nombre);

        /* Se puede usar el nombre de la variable como parámetro para la local.
        Para poder acceder a la variable global, habría que usar window.nombrevariable dentro de la 
        función. */
