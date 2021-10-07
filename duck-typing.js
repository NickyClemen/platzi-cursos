/* Identificar objetos dependiendo de sus propíedades y métodos. */
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

function requiredParams(param) {
    throw new Error(`El parámetro ${ param } es obligatorio.`)
}

function createLearningPath({
    name = requiredParams('name'),
    courses = []
}) {
    const private = {
        '_name': name,
        '_courses': courses,
    };

    const public = {
        get name() {
            return private['_name'];
        },
        set name(newName) {
            if(newName.length !== 0) {
                private['_name'] = newName;
            } else {
                console.log('Tu nombre no puede ser vacío.');
            }
        },
        get courses() {
            return private['_courses'];
        },
    };

    return public;
}

function createStudent({
    name = requiredParams('name'),
    email = requiredParams('email'),
    age = undefined,
    twitter = undefined,
    facebook = undefined,
    instagram = undefined,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    const private = {
        '_name': name,
        '_learningPaths': learningPaths,
    };

    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            facebook,
            instagram,
        },
        get name() {
            return private['_name'];
        },
        set name(newName) {
            if(newName.length !== 0) {
                private['_name'] = newName;
            } else {
                console.log('Tu nombre no puede ser vacío.');
            }
        },
        get learningPaths() {
            return private['_learningPaths'];
        },
        set learningPaths(newLearningPaths) {
            if(!newLearningPaths.name) {
                console.log('Tu el nombre de tu learning path no puede ser vacío.');
                return;
            } else if(!newLearningPaths && !isArray(newLearningPaths.courses)) {
                console.log('Tu learning path no puede ser vacío.');
                return;
            } else {
                private['_learningPaths'].push(newLearningPaths);
            }
        },
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

const nicole = createStudent({
    email: 'nicole.ordoqui@gmail.com',
    age: 30,
    name: 'Nicole',
    twitter: '@clemenicky'
});

