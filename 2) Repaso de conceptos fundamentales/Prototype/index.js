/* En Javascript no existen las clases, todos son objetos. */

/* Un objeto común y corriente.
const link = {

    name: "Link"

}

link.saludar = function() {

    console.log(`Hola, soy ${ this.name }.`);

}

link.saludar();

const zelda = {

    name: "Zelda"

}

zelda.saludar = function() {

    console.log(`Hola, soy ${ this.name }.`);

}

zelda.saludar(); */



/* Seamos un poco más eficientes.
function Hero(name) {

    const hero = {

        name: name

    }

    hero.saludar = function() {

        console.log(`Hola, soy ${ this.name }.`);
    
    }

    return hero;

}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('Link');
link.saludar(); */



/* Todavía se puede mejorar más el código para no repetir funciones.
const heroMethods = {

    saludar: function() {

        console.log(`Hola, soy ${ this.name }.`);
    
    }

}
function Hero(name) {

    const hero = {

        name: name,

    }

    hero.saludar = heroMethods.saludar;

    return hero;

}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('Link');
link.saludar(); */



/* Object.create() -> const newObject = Object.create(objeto); 
// Va a recibir un objeto, y va a crear uno nuevo. El nuevo objeto, va a tener todas las propiedades que el padre tiene definido.
const heroMethods = {

    saludar: function() {

        console.log(`Hola, soy ${ this.name }.`);
    
    }

}

function Hero(name) {

    const hero = Object.create(heroMethods); // -> Todas las propiedades de heroMethods, pasan a formar parte de éste nuevo objeto.

    hero.name = name;

    hero.saludar = heroMethods.saludar;

    return hero;

} 

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('Link');
link.saludar(); */



/* Los métodos de hero dentro de Hero.
function Hero(name) {

    const hero = Object.create(Hero.prototype); 

    hero.name = name;

    return hero;

}

Hero.prototype.saludar = function() {

    console.log(`Hola, soy ${ this.name }.`);

} // -> Todas las funciones tienen un PROTOTYPE. Inicialmente, PROTOTYPE es un objeto vacío. 

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('Link');
link.saludar(); */



// NEW es un atajo (azúcar sintáctica) para llevar Heroe.prototype al objeto.
/* NEW (keyword) es un atajo (azúcar sintáctica: Algo que se le añade al lenguaje para facilitar los objetos).
Cuando se usa NEW, Object.create() ocurre automáticamente. La regla, es que siempre lo va a sacar del prototype
del que sea el constructor (Hero.prototype). Sirve imaginarse que en lugar de guardarlo en Hero, lo va a almacenar
en THIS (se va a inicializar. Lo hace el lenguaje por nosotros). */
function Hero(name) {

    // const hero = Object.create(Hero.prototype); -> Cuando se usa NEW, Object.create() ocurre automáticamente. 

    this.name = name;

    // return this; -> Ocurre implícitamente.
    

}

Hero.prototype.hello = function() {

    console.log(`Hola, soy un superhéroe llamade ${ this.name }.`);

}

const zeldaDos = new Hero('Zelda');
zeldaDos.hello();

const linkDos = new Hero('Link');
linkDos.hello();

/* new es un Helper para Object.create(). Es lo que ocurre cada vez que construimos un constructor, como una función,
o escribimos [objeto].prototype. 
Ahora se usan CLASS y constructores (son helpers), pero es importante entender como funciona nativamente. */