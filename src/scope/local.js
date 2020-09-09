var scope = 'I am global';

const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}

const functionScope = () =>  {
    var scope = 'I am just a local';
    const func = () => scope;
    console.log(func());
    /* Ámbito léxico: La función tiene acceso a una variable local, y es la asignación
    sobre la que va a estar trabajando. No sobreescribe la variable global.
    Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución
    actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en
    ningún ámbito, se genera una excepción.
    Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se
    define por su ubicación dentro del código fuente, y las funciones anidadas
    tienen acceso a las variables declaradas en su alcance externo.
    No importa de dónde se llame una función, o incluso cómo se llama,
    su alcance léxico depende solo de dónde se declaró la función.*/
}

helloWorld();
// console.log(hello);
functionScope();
