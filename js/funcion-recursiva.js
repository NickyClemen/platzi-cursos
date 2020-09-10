/* La recursividad es un concepto muy importante en programación. 
Para hacer recursividad, se necesitan dos cosas:
    a) Un caso base.
    b) Un caso recursivo. */

function divisionEntera(dividendo, divisor) {

    if(dividendo < divisor) {

        return 0;

    } 

    return 1 + divisionEntera(dividendo - divisor, divisor);

}

divisionEntera(12, 2);