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

const student = {
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
}

const nicole = deepCopy(student);
/* Object.defineProperty(nicole, 'name', {
    value: 'Nicole',
    configurable: false,
}); */
Object.seal(nicole);
Object.isSealed(nicole); /* Verifica si todas las propiedades están protegidas de ser
eliminadas (configurable: false). */
Object.isFrozen(nicole); /* Verifica si todas las propiedades están protegidas de ser
eliminadas y sobreescritas (configurable y writable: false). */
console.log(nicole);