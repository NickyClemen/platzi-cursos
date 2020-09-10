/* El libro Desing Patters del Gang of Four definió la lista inicial de los patrones de diseño de software. 
Lo dividió en tres categorías:
    1) Patrones creacionales: Proveen distintos mecanismos de crear objetos.
        a) Abstract Factory: Permite trabajar con objetos de distintas familias, de manera que las familias no se mezclen entre sí,
        y haciendo transparente el tipo de familia concreta que se esté usando. El problema a solucionar por este patrón es el de
        crear diferentes familias de objetos, como por ejemplo, la creación de interfaces gráficas de distintos tipos
        (ventana, menú, botón, etc).
        b) Builder (Constructor): Es usado para permitir la creación de una variedad de objetos complejos desde un objeto fuente.
        Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de construcción puede servir para crear 
        representaciones diferentes.

            Cómo usa jQuery el Builder.
            $('<h1 class="super-big">My favorite Pokemons</h1>');
            $('<button class="btn">Llama ya</button>').click(() => (

                console.log('Llamando...');

            ));
            $("<input>")
                .attr({ "type": "email", "id": "email" })
                .appendTo("#login-form");

        c) Factory Method: Centraliza en una clase constructora la creación de objetos de un subtipo de un tipo determinado,
        ocultando al usuario la casuística, es decir, la diversidad de casos particulares que se pueden prever,
        para elegir el subtipo que crear. Parte del principio de que las subclases determinan la clase a implementar.

            classConcreteCreatorextendsCreator{

                protected Product factoryMethod(){

                    returnnew ConcreteProduct();

                }

            }

            interface Product { ... }

            classConcreteProductimplementsProduct { ... }

            public classClient{

                public staticvoid main(String args[])

                {
                    Creator unCreator = new ConcreteCreator();

                    unCreator.factoryMethod();

                }

            }

        d) Prototype: Crea nuevos objetos clonándolos de una instancia ya existente.
        e) Singleton: Garantiza la existencia de una única instancia para una clase, y la creación de un mecanismo de acceso
        global a dicha instancia. Restringe la instanciación de una clase o valor de un tipo a un solo objeto. 

            public sealed classSingleton
            
            {
                private static volatile Singleton instance;

                private static object syncRoot = newObject();

                private Singleton()
                {
                    System.Windows.Forms.MessageBox.Show("Nuevo Singleton");
                }

                public static Singleton GetInstance
                {
                    get
                    {
                        if (instance == null)

                        {
                            lock(syncRoot)

                            {
                                if (instance == null)
                                instance = new Singleton();

                            }

                        }

                        return instance;
                        
                    }

                }

            }

    2) Patrones estructurales: Describe formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
        a) Adapter o Wrapper: Adapta una interfaz para que pueda ser utilizada por una clase que de otro modo no podría utilizarla.
        Expone una interfaz interna, y externa una interna que ´puede llegar a ser compleja.

            Como usa jQuery el Adapter
            // IE <= 11+
            let inputEl = document.createElement('input');
            inputEl.value = 'priority-shipping';
            inoutEl.type = "radio";
            console.log(inputEl.value); // undefined.

            // Con jQuery
            let $input = $('<input />');
            $input.val('priority-shipping');
            $input.attr({ type: 'radio' });
            console.log($input.val()); // priority-shipping.
        
        b) Bridge: Desacopla una abstracción de su implementación.
        c) Composite: Permite tratar objetos compuestos como si de uno simple se tratase. 
        Es un patrón, que sin importar si se tiene un arreglo de elementos o si se tiene un solo elemento, se los trata todos iguales.
            
            // Un solo elemento.
            $('#submit-button').addClass('big-text');
            $('#hero-heading').addClass('big-text');

            // Muchos elementos.
            $('button').addClass('big-text');
            $('.title').addClass('big-text');
            $('h1').addClass('big-text');

        d) Decorator: Añade funcionalidad a una clase dinámicamente.
        e) Facade: Provee de una interfaz unificada simple para acceder a una interfaz o grupo de interfaces de un subsistema.
        f) Flyweight: Reduce la redundancia cuando gran cantidad de objetos poseen idéntica información.
        g) Proxy: Proporciona un intermediario de un objeto para controlar su acceso. Recibe llamadas que van dirigidas a un 
        objeto, pero las intercepta, y tiene la posibilidad de hacer algo con eso. Finalmente, le pasa la llamada al objeto.
        h) Module: Agrupa varios elementos relacionados, como clases, singletons, y métodos utilizados globalmente,
        en una entidad única.

    3) Patrones de comportamiento: Gestiona algoritmos y responsabilidades entre objetos.
        a) Chain of responsibility: Permite establecer la línea que deben llevar los mensajes para que los objetos realicen la tarea indicada.
        b) Command: Encapsula una operación en un objeto, permitiendo ejecutar dicha operación sin necesidad de conocer el contenido de la misma.
        c) Interpreter: Dado un lenguaje, define una gramática para dicho lenguaje, así como las herramientas necesarias para interpretarlo.
        d) Iterator: Permite realizar recorridos sobre objetos compuestos independientemente de la implementación de estos.
        e) Mediator: Define un objeto que coordine la comunicación entre objetos de distintas clases, pero que funcionan como un conjunto.
        f) Memento: Permite volver a estados anteriores del sistema.
        g) Observer: Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se
        notifique y actualicen automáticamente todos los objetos que dependen de él. Un objeto le pasa su estado a otro que está
        interesado.
        h) Strategy: Permite disponer de varios métodos para resolver un problema y elegir cuál utilizar en tiempo de ejecución.
        i) Template Method: Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos,
        esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura.
        j) Visitor: Permite definir nuevas operaciones sobre una jerarquía de clases sin modificar las clases sobre las que opera.
        k) State: Permite que un objeto modifique su comportamiento cada vez que cambie su estado interno. 
        
    4) Patrones de interacción: El primer intento por aplicar este concepto en el diseño de las interfaces de usuario se dio por
    Ward Cummingham y Kent Beck quienes adaptaron la propuesta de C. Alexander y crearon cinco patrones
    de interfaz: Window per task, Few panes, Standard panes, Nouns and verbs, y Short Menu. En años más recientes investigadores
    como Martin Van Welie, Jennifer Tidwell han desarrollado colecciones de patrones de interacción para la World Wide Web.
    En dichas colecciones captan la experiencia de programadores y diseñadores expertos en el desarrollo de interfaces usables
    y condensan esta experiencia en una serie de guías o recomendaciones, que puedan ser usadas por los desarrolladores novatos
    con el propósito de que en poco tiempo adquieran la habilidad de diseñar interfaces que incidan en la satisfacción de los
    usuarios. Los patrones de interacción buscan la reutilización de interfaces eficaces y un manejo óptimo de los recursos de
    las páginas web, haciendo más eficaz el consumo de tiempo en el diseño del sitio web y permitiendo a los programadores novatos
    adquirir más experiencia. /