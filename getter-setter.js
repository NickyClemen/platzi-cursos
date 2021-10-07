const nicole = createStudent({
    email: 'nicole.ordoqui@gmail.com',
    age: 30,
    name: 'Nicole',
    twitter: '@clemenicky'
});

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
        get name() {
            return private['_name'];
        },
        set name(newName) {
            if(newName.length !== 0) {
                private['_name'] = newName;
            } else {
                console.log('Tu nombre no puede ser vacío.');
            }
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
