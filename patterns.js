/* Factort pattern y RORO permiten generar objetos con funciones. */
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

/* const student = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
} */
const nicole = createStudent({
    email: 'nicole.ordoqui@gmail.com',
    age: 30,
    name: 'Nicole',
    twitter: '@clemenicky'
});

console.log(nicole);

function requiredParams(param) {
    throw new Error(`El parámetro ${ param } es obligatorio.`)
}

function createStudent({
    name = requiredParams('name'),
    email = requiredParams('email'),
    age = undefined,
    twitter = undefined,
    facebook = undefined,
    instagram = undefined,
    approvedCourses = [],
    learningPaths = [],
}) {
    const private = {
        '_name': name,
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            facebook,
            instagram,
        },
        readName() {
            return private['_name'];
        },
        changeName(newName) {
            private['_name'] = newName;
        }
    };

    Object.defineProperty(public, 'readName', {
        configurable: false,
        writable: false,
    });

    Object.defineProperty(public, 'changeName', {
        configurable: false,
        writable: false,
    });

    return public;
}
