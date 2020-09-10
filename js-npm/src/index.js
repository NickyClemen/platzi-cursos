/* NPM (Node Package Language): Gestor de paquetes de recursos de JS. Se pueden crear y compartir. 
npm init: Crea el archivo packge.json
npm init -y: Genera un documento rápido (automático).

npm set init.author.email "email@email.com": Setea el email.
npm set init.author.name "nombre": Setea el nombre.
npm set init.licence "licencia": Setea la licencia.
    Cuando se hace npm init -y, queda esa información guardada en el package.json

entry point es muy importante, porque es el punto entrada del proyecto. Sirve para leer la configuración del proyecto.
Licencia MIT: Permite trabajar con open source.

Dependencias: Recursos que se utilizan en los proyectos. 

npm install [dependencies] - A partir de la versión 5 de npm, se instala como una dependencia
requerida para el proyecto:
    npm install: Revisa el package.json e instalada todas las dependencias.
        npm i: Shortcut.
    npm install [dependendies] -force: Fuerza la instalación de las dependencias en los proyectos en su última versión.
    Puede pasar que no se instale donde debería, por lo que se puede editar package.json de manera manual (se tiene que volver
    a correr la instalación).
        npm install [dependendies] -f: Shortcut.
    npm install [dependendies] --save: Por default. Signfica que es necesario para vivir en
    producción. Hay que tener cuidado.
        npm i [dependencies] -S: Shortcut.
    npm install [dependendies] --save-dev: Solamente es necesario para el entorno local/dev.
        npm i [dependencies] -D: Shortcut.
    npm install -g [dependencies]: Instalación de forma global.
    npm list -g --depth 0: Lista los packages instalados globalmente.
        --depth setea la profundidad.
    npm install [dependencies] -O: Instalación opcional.
    npm install [dependencie]@version: Permite instalar una versión específica de una dependencia.
    npm fund: Avisa qu ehay recursos que requieren financiamiento.
    npm [dependencie] --dry-rub: Simula una instalación. Flag que permite no instalar la dependencia, pero veo el 
    output que retorna.
Package que debe correr de forma global
Los paquetes se pueden ejecutar en el proyecto, pero no están disponibles en otros proyectos si no está instalado.
nodemon: Genera un demon que está siempre escuchando algún cambio.

node_modules: Se agregan las carpetas que se están instalando en el proyecto. Es importante, pero
no tiene que ser enviada a ningún repositorio y se debe ignorar. Se edita en el .gitignore.

    npm list: Lista los paquetes que tiene el proyecto.
    npm outdate: Muestra qué paquetes están desactualizados.
    npm outdate --dd: Output detallado del proceso de instalación del paquete.
    npm update: Actualiza los paquetes a su última versión.
    npm install [dependencies]@latest: Hacer update de un paquete particular.
    npm uninstall [dependencie]: Desinstalar un paquete. Lo elimina de node_modules y de package.json.
    npm uninstall [dependencie] --no-save: Desinstalar un paquete. Lo elimina de node_modules, pero no de package.json.

Versionado de npm
    "dependecie": "^2.10.0", --> Valor que se establece dentro del versionado.
    Versionado
        3: Un cambio mayor.
        9: Cambio menor. Agregan funcionalizades nuevas, pero no alcanzan para definirla como nueva versión. ^ (caret) -> Si se
        lo mantiene dentro de la configuración del package.json, se garantiza que cuando se hagan actualizaciones, serán de los
        menores y parches del paquete.
        2: Parches, bug fixing, cambios menores. ~ (tilde). Se establece que hay actualizaciones solamente de los parches.
        Al eliminar del caret o el tilde, se garantiza mantener la versión (no hay actualizaciones).

A partir de la versión 5 de npm, hay un archivo que se llama package-lock, el cuál permite tener ciertas configuraciones,
que van a permitir entender qué está pasando a lo largo de la construcción del proyecto: Versiones instaladas, paquetes, etc.
Permite tener más un versionado más ordenado. Se puede compartir.

Los scripts son comandos que se pueden establecer para poder ejecutar desde la consola. Se pueden crear los que se
necesiten. Se pueden correr de forma nativa dentro de la consola.
Tiene que ser un shortcut descriptivo de lo que se quiere hacer.
    npm run [command]

    npm test: Se establece por defecto. Si hay un test, lo ejecuta.
    npm start: Inicia el proyecto.
    npm cache clean --force: Limpia el cache.
    npm cache clean verify: Verifica el cache.
    rm -rf [directory]: Elimina directorios.

Se puede instalar un paquete para borrar node_modules: npm install -g rimraf

    npm audit: Audita el proyecto en busca de vulnerabilidades.
    npm audit --json: Genera un documento json con las vulnerabilidades.
    npm update [dependencie] --depth 2: Actualizar la dependencia hasta el nivel 2 (actualizar las dependencias de las que
    depende).
    npm audit fix: Repara las vulnerabilidades.




*/