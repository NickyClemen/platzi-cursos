const messages = [
    'Nicole',
    'Cirilla',
    'Ivan',
    'Alan',
    'Juan',
    'Daira',
    'Susana',
    'Claudia'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };

// Hay que crear una carpeta llamada bin para que sea instalada de forma global.

/* npm link: Crea una referencia al paquete.
Se puede instalar haciendo npm install [url-package] 
npm adduser: Pide el usuario (user, pass y email). 
npm publish: Lee el archivo package.json para publicar el paquete. 

Consideraciones para el publicación del paquete.
    1) README.MD: Explicar qué hace el paquete. Todos deben estar en inglés.
    2) Repositorio.
Con npm init se termina de configurar el proyecto. 
npm version: Versionado del paquete.
    -major    
    -minor
    -patch */