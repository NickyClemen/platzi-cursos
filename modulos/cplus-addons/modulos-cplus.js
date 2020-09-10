/* Para trabajar con módulos nativos, se instala node-gyp. 
    npm install -g node-gyp
    Se crea un binding.gyp:
        {
            "targets": [
                {
                    "target_name": "binding",
                    "sources": [ "hola.cc" ]
                }
            ]
        }
    node-gyp configure
    node-gyp build */
const miAddon = require('./build/Release/binding');
console.log(miAddon.hello());

