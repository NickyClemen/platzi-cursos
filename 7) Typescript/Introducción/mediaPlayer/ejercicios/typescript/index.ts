/* Typescript es un superset de Javascript. Permite agregarle tipado a las variables y funciones.
Ayuda a detectar errores de forma temprana, mejora el autocompletado, y nos da herramientas para que el
desarrollo sea más seguro y agradable. 

Instalar parcel con npm 
    npm install -D parcel-bundler
Remover live-server    
    npm rm live-server

Cuando la página no carga, es común tener que parar el servidor, y borrar dos carpetas:
    rm (del en Windows) -rf .cache dist */

    console.log('Hello, Typescript.');

    function add(a: number, b: number) {
    
        return a + b;
    
    }
    
    const sum = add(2, 3);
    /* Typescript hace un análisis estático de las variables para poder predecir los tipos de datos de las funciones. */