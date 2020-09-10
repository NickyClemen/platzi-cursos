function otraFuncion() {
    return seRompe();
} // Los errores en Node, se mandan a la función 'raíz'.

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => { // No son capturados por try/cath original, porque están en otro hilo.
        try {
            3 + z
        } catch(error) {
            cb(error.message);
        }
    }, 1000);
}

try {
    // otraFuncion();
    // seRompe();
    seRompeAsincrona(console.log);
} catch(error) {
    console.error(error.message);
}