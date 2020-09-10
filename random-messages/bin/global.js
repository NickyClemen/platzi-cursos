#!/usr/bin/env node 
// Se garantiza que se ejecuta en bash.
/* package.json
    "bin": {
        "random-msg": "./bin/global.js"
    }, Entry con el nombre del paquete y dónde se ejecuta.
    "preferGlobal": true Especificar que es de instalación global. */

let random = require('../src/index');
random.randomMsg();