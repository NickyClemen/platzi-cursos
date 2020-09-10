const bcrypt = require('bcrypt'); // Para cifrar contraseñas.

const password = 'Ciren2020*'
bcrypt.hash(password, 5, (err, hash, password) => {
    console.log(hash);
    bcrypt.compare('password', hash, (error, res) => console.log(res)); // Compara el hash con la password.
}); /* 1) Contraseña. 2) Número de vueltas para crear el hash. */

