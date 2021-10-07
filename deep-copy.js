/* Se dice que el objeto tiene un deep copy cuando cada propiedad del objeto apunta a
una copia separada, incluso si la propiedad apunta a un objeto (valores de referencia).
Se crea una copia separada del objeto de referencia para el objeto de destino. En caso de
copia profunda, las propiedades de referencia del objeto de origen y las propiedades de
referencia del objeto de destino apuntan a diferentes ubicaciones de memoria.

Resumen de Deep Copy
El objeto de destino contiene una copia separada del nombre, la edad y la designación.
Instancias separadas de tipos de valor. Se crea una referencia separada para objetos complejos
("dirección"). */

const abc = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    f: ['g', 'h', 'i'],
    editA() {
        this.a = 'AAAAAAAAAAAAAAAA';
    }
};

const copyObject = deepCopy(abc);
copyObject.editA();
copyObject.f.push('j');

console.log(abc);
console.log(copyObject);

function isObject(subject) {
    return typeof subject === 'object';
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}