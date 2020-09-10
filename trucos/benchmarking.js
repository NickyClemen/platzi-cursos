/* Pruebas de rendimiento. */
console.time('todo');
    let suma = 0;
    let sumaDos = 0;

    console.time('bucle');
        for(let i = 0; i < 100000000; i++) {
            suma += 1;
        }
    console.timeEnd('bucle');

    console.time('bucleDos');
        for(let j = 0; j < 100000000; j++) {
            suma += 1;
        }
    console.timeEnd('bucleDos');
    
    console.time('asincrono');
        function asincrona() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Termina el proceso asíncrono.');
                    resolve();
                },1000);
            });
        }

        asincrona()
            .then(() => console.timeEnd('asincrono'));
console.timeEnd('todo');