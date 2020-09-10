/* Webpack nos va a servir para preparar el proyecto, para un entorno de desarrollo local, o mandarlo
a producción.
Se encarga de todos los archivos JS, HTML, CSS y multimedia, los empaqueta, los optimiza,
y los deja listos para mandarlos a producción. 

Instalar webpack
    npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
    
html-webpack-plugin -> Plugin para aplicaciones HTML. 

En la carpeta raíz, se crea un archivo llamado webpack.config.js, dónde va a vivir la configuración para 
todo el proyecto. Luego de configurarlo, se va a package.json oara crear el script que va a correr la compilación
de Webpack. 
    "webpack --mode production" */