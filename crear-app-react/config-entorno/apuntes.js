/* Buenas prácticas:
    1) Inicializar un repositorio en Git:
        git init - Inicia un repositorio local.
    2) Inicializar el proyecto: package.json 
        npm init -y 
        -y -> Preconfigura el archivo y no lo crea automáticamente.
    
    code . -> Abre el editor de código. 
    
Standares:
    1) Establcer dónde va a vivir el código.
        a) Carpeta SRC (source): Dónde se añade todo el código de lo que se esté haciendo, 
        así en la raíz quedan solamente las configuraciones que uno vaya a haciendo. 
        b) public: Accá viven todos los archivos y elementos que se vayan a publicar cuando se
        mande a producción. Se crea un index.html.
        c) src -> components: Acá se empiezan a crear los archivos principales. Hay uno que es la 
        entrada del proyecto, y se va a llamar index.js. 
        
Instalar React para tener la base inicial.
    npm install react react-dom
Tener cuidado con las vulnerabilidades. 

En la carpeta raíz, se puede observar que hay un archivo package.lock.json, que lo que permite 
es maneja el versionado de los paquetes que se están instalados. */