/* Decorator - Patrón estructural. 

    "Una entidad de software (clase, módulo, función, etc), debe quedar abierta para su extensión,
    pero cerrada para su modificación". - Principio abierto/cerrado de diseño de software (Open Closed Principle).  
    
    1) Añade nuevas responsabilidads a un objeto de forma dinámica (no se va a la clase a cambiar el código).
    2) Nos permiten extender funcionalidad sin tener que usar subclases. 
    
The Javascript way (Monkey patching)

    class MacbookPro {

        constructor() { this.memory = 8; }
        cost() { return 2399; }

    }

    function withMemory(amount, computer) {

        let cost = computer.cost();
        computer.cost = function() {

            let memoryCost = Math.max((amount - 8) * 25, 0);
            return cost + memoryCost;

        }

    }

    let macbook = new MacbookPro();
    withMemory(32, macbook);

    console.log(macbook.cost());
    // 2999.

    Closures.
    Herencia prototipal.
    Middleware.
    ECMAScript Decorators (Stage 2).

    Lodash.memoize: Recibe una función, y devuleve una nueva. Utiliza una técnica wque hace más eficiente
    una ejecución de una función, cuyos argumentos no hayan cambiado.

*/