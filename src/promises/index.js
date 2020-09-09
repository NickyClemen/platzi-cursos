const somethingWillHappen = () => {
    return new Promise((response, reject) => {
        return (true) 
            ? response('Hey')
            : reject('Ups');
    });
}

const somethingWillHappenDos = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True.');
            }, 2000)
        } else {
            const error = new Error('Ups!');
            reject(error);
        }   
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(reject => console.error(reject));

somethingWillHappenDos()
    .then(response => console.log(response))
    .catch(reject => console.error(reject));

// Promise.all. Permite ejecutar varias promises al mismo tiempo y retornar un array con el resultado.
Promise.all([somethingWillHappen(), somethingWillHappenDos()])
    .then(response => console.log(response))
    .catch(reject => console.error(reject));