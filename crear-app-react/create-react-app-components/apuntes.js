/* Se utiliza NPX para instanciar create-react-app, que es un módulo que nos da un build play 
que nos da todo lo necesario para empezar a trabajar con React al instalarlo. 

    npx create-react-app [nombre de la aplicación] 
    
Estructura de proyectos en React
    1) node_modules: Están todos los módulos que necesita React para poder funcionar. También se agregar
    ahí todas las que se vayan instalando. Importante que esté el .gitignore, ya que no se sube al producción.
    2) public: Archivos públicos que pueden ser enviados a producción. Está el index.html principal,
    que es dónde se le va agregando lo que se va haciendo con React. 
    3) src: Es dónde se encuentra toda la aplicación. 
    
Dentro de la carpeta de componentes, se va a crear un componente STATEFUL, el cuál es conocido como la 
estructura de clases. Nos permite tener ciclo de vida y estado, y es el más robusto que tiene React. 

Otro componente que se va a crear, es STATELESS, el cuál no depende de estado ni ciclo de vida, sino que 
sólo va a presentar la lógica. Es uno de los más utilizados hoy en día, ya que trabajan con la parte funcional,
lo cuál nos permite enfocarnos en una particularidad. 

Función presentacional: El que tiene una parte muy particular de HTML que no tiene lógica ni componentes. */