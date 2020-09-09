/* Lo que está entre '{}' estpa guardado dentro de un bloque.
Las funciones pueden tener un block scope. */
// let x = 1;
var x = 1;

{

    // let x = 2;
    var x = 2;
    console.log(x);
    
}

console.log(x);

const fruits = () => {

    if(true) {
        var apple = 'apple';
        let banana = 'banana';
        const kiwi = 'kiwi';

        console.log(banana);
        console.log(kiwi);
    }

    console.log(apple);
    
}

const anotherFunc = () => {
    for(let i = 0; i < 10; i++ ) {
        setTimeout(() => console.log(i), 1000);
    }
}

fruits();
anotherFunc();