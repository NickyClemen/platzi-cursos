/* Hoisting. Levantamiento de las declaraciones.
Pasa cuando se está compilando el programa antes de ser interpretado, por lo que se
puede acceder a valores que no han sido declarados, pero están dentro de la estructura.
Lo utiliza nada más en las declaraciones, no en las inicializaciones. */
a = 2;
var a;
console.log(a);

console.log(b);
var b = 2;

nameOfDog('Poker');
function nameOfDog(name) {
    console.log(name);
}
