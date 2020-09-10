/* Error first callback: El primer parámetro es el error. 
También se tiene el callback como último argumento. */
function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(error) {
           callback(error, null);
        }
    }, 1000);
}

asincrona(function(error, data) {
    if(error) {
        /* console.error(error.message);
        return false; */
        // throw error; No cirve para async functions.
    }

    console.log('Todo salió bien. Los datos son ', data);
});