const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
    // Scope local dentro de una función.
}

const anotherFunc = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2; // No se puede reasignar si ya existe dentro del mismo scope.
    
    console.log(x);
    console.log(y);
}

fruits();
anotherFunc();