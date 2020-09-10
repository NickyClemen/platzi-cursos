/* 1) INTRODUCCIÓN AL REACT.

¿QUÉ ES REACT JS?

Es una biblioteca de JS para construir intEGrfaces de usuario.
React es declarativo (le tenemos que decir qué hacer, no cómo hacerlo).
El HTML en el archibo .js es JSX.
Componentes (bloques de código).
Aprendelo una vez, escribilo dónde sea. Nos permite escribir en varias plataformas.

2) FUNDAMENTOS.

REACTDOM.RENDER

En Javascript

const element = document.createElement('h1');
Crea un elemento de HTML.

element.innerHTML = 'Hello, Platzi Badges!';
Agrega un texto al elemento creado.

const container = document.getElementById('app');

container.appendChild(element);

En React.

import React from 'react'; Análogo del createElement.
Es requisito que si se va a escribir JSX, aparezca la importación de react.
import ReactDOM from 'react-dom'; Análogo del appendChild.

const element = <h1>Hello, Platzi Badges from React!</h1>

const container = document.getElementById('app');

ReactDOM.render(element, container);
Toma dos argumentos:
    a) Qué se quiere renderizar.
    b) Dónde se lo va a renderizar.

3) CREACIÓN Y DISEÑO DE COMPONENTES.

¿QUÉ ES UN COMPONENTE?

Unidad básica de desarrollo.

Componente vs. Elemento.

Un elemento es un objeto, como un componente es una clase.

Identificación de componentes.

Dos preguntas guías:
    a) ¿Qué elementos se repiten?
        1) Elementos en una lista.
        2) Elemmentos que comparten aspecto visual y funcionalidad.
    b) ¿Qué elementos cumplen una función muy específica?
        1) Sirven para encapsular lógica.
        2) Permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

PROPS (properties)

Props son argumentos de una función (atributos del componente).

NUESTRA PRIMERA PÁGINA.

Las páginas en React siguen siendo componentes (contenedor de componetes).

ENLAZANDO EVENTOS

Si el método se llama onChange, el evento se va a llamar handleChange.

MANEJO DE ESTADO.

El componente es capaz de producir su propia información y almacenarla,
ya sea para consumirla o pasarsela a otro componente por props.
La clave está es que la información el setState pasa en una sola dirección. Otros props
la pueden consumir, pero no cambiar.

LEVANTAMIENTO DE ESTADO.

Levantamiento de estado: Pasar la información de un componente a otro (lograr que estado pueda ser pasado a otros componentes).
Se lo programa en el lugar más cercano al resto de los componentes que van a compartir la información.

Cada vez que hay un cambio de estado o en uno de los componentes, se vuelve a renderizar todo.

3) REACT ROUTER 

Las aplicaciones trabajadas en React suelen tener un nombre: SPA (Single Page App).

Introducción

React Router

Es una librería open source, que nos ayuda a crear SPA.

Multi Page App (MPA)

    -Cada página implica una petición al servidor. La respuesta, usualmente, tiene todo el contenido de la página.
    Se lo relaciona con el internet de la vieja escuela.
    Cada petición al servidor, hace que la página se actualice y se vuelva a cargar el contenido.
    Por cada petición a la página, hay que volver a obtener todos los datos y renderizarlos completamente.

Single Page App (SPA)

    -Aplicaciones que cargan una sola página de HTMl, y cualquier actualización, la hacen re-escribiendo el HTML que ya tenía.
    Se navega entre páginas, pero solamente se piden los datos necesarios para esa página. 
    Se evita renderizar la página completamente (no hay espacio en blanco).

React Router (v4)

    -Nos da las herramientas para hacer SPA fácilmente.
    -Se usan cuatro componentes: 
        1) Browser Router: Componente que va en lo más alto de la aplicación. Todo lo que está ahí adentro, va a funcionar
        como si fuese una SPA. Lo que va a permitir, es que a las demás herramientas funcionen. Si no se usa Browser Router, o se
        usan otros componentes fuera de éste, no van a funcionar.
        2) Router: <Route />  
        Representa una dirección de internet. Recibe varios props. El básico, es el path (dónde se va a renderizar
        el componente), y component (qué componente se va a renderizar). El componente, usualmente es una página.
            a) Cuando hay un match con el path, se hace render del component.
            b) El component va a recibir tres props: match, history y location. Proveen información sobre la dirección de internet
            en la que está la página en el momento.
        3) Switch. <Switch />
        Es un compoennte que nos va a servir para presentar una sola ruta de varias que podemos colocar en el componente.
        Es parecido a switch que viene con JS, ya que trae varios casos. Se le pasa un valor (la dirección del navegador), y
        va a decidir una soal ruta (la primera que coincida con esa dirección).
            a) Dentro de Switch, solamente van elementos Route. 
            b) Switch se asegura que solamente un Route se renderiza.
        4) Link. <Link />
        Toma el lugar de elemento ancla. El elemento ancla, si se lo tiene en la aplicaicón, y le damos click, va
        a volver a cargar la aplicación completa. Como no se quiere eso, se tiene que cambiar la dirección sin que la aplicación
        se nos vaya. Trabaja junto a Browser Router para cambiar el link que aparece en la barra de navegación, pero sin tener que 
        recargar la página completa.
            a) Toma el lugar del elemento <a>.
            b) Evita que se recargue la página completamente.
            c) Actualiza la URL.

MEJORANDO LA USER INTERFACE CON UN LAYOUT.

    Layout: Plantilla en común para todas las páginas.

5) COMPONENT LIFECYCLE

INTRODUCCIÓN AL CICLO DE VIDA DE UN COMPONENTE

            Los componentes, cuando React los renderiza, decimos que "entran en escena".
            Cuando su estado cambia, o recibe props diferentes, se actualizan.
            Cuando cambiamos de página, y el componente ya no estpa, se desmontó.

            1) MONTAJE. El componente, cuando decimos que se monta, lo que pasa es que el código que lo representa,
            React lo está introduciendo al DOM (documento HTML que representa la página que se está construyendo).
                a) Representa el momento dónde se inserta el código del componente en el DOM.
                b) Se llama a tres métodos: 
                    1) CONSTRUCTOR (el lugar perfecto para inicializar estado, inicializar valores).
                    2) RENDER (momento preciso en que React va a calcular lo que el elemento representa, y lo va a introducir
                        en el DOM).
                    3) componentDidMount (cuandos se llama, el componente ya es visible en pantalla).

            2) ACTUALIZACIÓN. Cuando los props o el state de un componente cambia, ocurre una actualización, y 
            vuelve a renderizarse. Aplica a todos los componentes hijos. 
                        a) Ocurre cuando los props o el estado del componente cambia.
                        b) Se llaman dos métodos: 
                            1) Render.
                            b) componentDidUpdate (éste método va a recibir dos argumentos: Los props que tenía anteriormente,
                            y el estado que tenía antes. Nos sirve para hacer comparaciones entre la versión anterior y al actual).

            3) DESMONTAJE. Desaparece de la pantalla.
                        a) Nos la oportunidad de hacer limpieza de nuestro componente.
                        b) Se llama al método componentWillUnmount (lugar perfecto para limpiar memoria).

6) LLAMADAS A UN API.

INTRODUCCIÓN LLAMADAS A API.

    En React, muchas cosas se tratan de patronas, fórmulas que reescribimos varias veces.

    Cada llamada tiene tres estados:
        a) Loading: Estado en el cuál la petición se envía. Para proveer una buena experiencia de usuario, hay 
        que proveer de un indicador.
        Cuando devuelve una respuesta, puede devolver dos resultados:
            1) Error: Es muy importante que haya un indicador de error, ya que podemos quedarnos con una pantalla
            en blanco.
            2) Datos. Hay dos subestados:
                1) Vacío.
                2) Con datos.

    Sacado de comentarios respecto a las funciones para llamar APIs.

        Siempre que hagamos un llamado a un API, tendremos dos opciones: Axios y Fetch. 
        Por lo general, es más conveniente y más sencillo usar Fetch; pero hay muchos que se inclinan
        por Axios, ya que hace peticiones basadas en Promesas de ES6. Además, tiene las siguientes funcionalidades: 
        Hace peticiones usando XMLHttpRequest; puede hacer peticiones desde Node.js; intercepta peticiones 
        y respuestas; transforma la data de la petición y la respuesta; 
        permite cancelar las peticiones, entre otras.

7) MEJORANDO LA UI.

LOS DETALLES DE UN BADGE.

    Todas las aplicaciones de tipo CRUD, permiten a los usuarios crear, editar, listar, actualizar o borrar
    recursos.

HOOKS

    Dos tipos de componentes:
        a) Clases: Tienen estados y un ciclo de vida.
        b) Funciones: No tiene estado propio para manejar. No tiene ciclos de vida a los que se tenga
        que suscribir.

    Cuando se quiere comenzar la petición a una API, se comienza, tal vez, en el componentDidMount.

    Hooks permite que las funciones tengan features que solamente tienen las clases.
    Permite que los componentes funcionales tener características que sólo las clases tienen:
        a) useState: Para manejo de estado.
        b) useEffect: Para suscribir al componente a su ciclo de vida.
        c) useReduce: Ejecutar un efecto basado en una acción.

    Custom Hooks

        Usamos los hooks fundamentales para crear nuevos hooks custom.
        Éstos hooks irán en su propia función, y su nombre comenzará con la palabra USE.
        Nunca se lo puede ejeuctar condicionalmete.


    





*/