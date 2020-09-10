/* VAR, LET Y CONST: LAS DIFERENCIAS ENTRE ELLOS. 

var: La manera más antigua de declarar variables.
Tiene alcance global.
Cuando se declaran variables con VAR, lo que sucede, es lo mismo a que 
si nosotros estuviésemos escribiendo la variable de la siguiente manera:

    var ejemplo;
    
    ejemplo = valor;
    
    ejemplo = valor;
    Ésto se conoce como hoisting.

Las variables VAR siempre conviene declararlas arriba, para que quede bien claro que van a existir dentro del
programa.

let: Al usar let, el alcance (desde dónde se puede acceder) de la variable se reduce al bloque de código
en el que es invocada.
const: Se comporta parecido a LET, con la diferencia de que no se puede reasignarle un valor. Solamente se puede
inicializar. Se puede modificar.

Lo recomendable, es reducir el alcance de las variables lo máximo posible.
Lo mejor que se puede hacer, no es utilizar VAR, sino LET si se tiene que resignar la variable. Si nunca se tienen
que redefinir, usar CONST (sirve para evitar bugs).

*/

var nicole = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 28

}

function esMayorEdad(persona) {

    let mensaje;

    const MAYOR_DE_EDAD = 18;

    if(persona.edad >= MAYOR_DE_EDAD) {

        mensaje = 'Es mayor de edad';

    } else {

        mensaje = 'Es mayor de edad';

    }

    console.log(mensaje);

}

esMayorEdad(nicole);

// Otra cosa a tener en cuenta con las variables en los ciclos.

for(var i = 0; i < 10; i++) {

    console.log(i);

}

console.log(`El valor de la variable es ${i}.`);
/* Se puede acceder al valor de i cuando se lo delcara con VAR. 
Cuando está declarada con LET, no se puede acceder, ya que existe dentro del bucle. */