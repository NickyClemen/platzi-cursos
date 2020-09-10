/* ¿Qué es Babel?
Es una herramienta que se utiliza para crear Javascript moderno, y utilizarlo para que pueda ser
compatible con todos los mnavegadores. 

    npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev 
    Guardar como dependencia de desarrollo. 
    
Luego de instalar las dependencias, hay que agregar una carpeta para Babel llamada .babelrc
(se crea en la raíz del proyecto). Se crea un objeto con las configuraciones que se instalaron previamente:
    a) babel-core: Transforma el Javascript a código moderno.
    b) babel-loader: Trabaja con Webpack.

        "presents": [

            "@babel/preset-env",
            "@babel/preset-react"

            Uno sirve ára trabajar con ES5 y &, y el otro para JSX y React.

        ] -> En el arreglo, se pasan los nombres de los presents que se instalaron.
En sistemas operativos basados en Unix, el inicio en '.', significa que el archivo es oculto. */