/* React Hooks
    Feature que salió en la versión 16.8 en febrero de 2019.
    Los presentaron en la ReactConf por Dan Abramov y Sophie Albert.
    Son compatibles con versiones anteriores.

    Problemas a solucionar
        1) Nacen al ser complicado compartir el estado entre componentes, lo que provocaba un "component hell" (componentes
        anidados con props cada uno).
        2) Vuelve obsoletas las clases (mejora sintáctica para trabajar la herencia con prototypes). Se trabaja directamente
        con funciones.

    Hook: Función especial que permite conectarse con características de React.

    npx permite llamar un scripts desde la nube.

useState permite controlar el estado en componentes creados como funciones.
useEffect: Hay que dejar de lado el ciclo de vida de los componentes. Permite manejar "efectos" que van s ser transmitidos dentro de los componentes.
Sirve para manejar lógica interna dentro del componente.
useContext: Sirve para pasar información entre componentes. Ayuda a interconectarlos sin usar props.
useReducer: Forma más amigable de trabajar con el estado. Es parecido a trabajar con Redux, ya que tiene un estado inicial, un reducer y un dispatch.
useMemo: Evita cálculos innecesarios utilizando la memoización.
useRef: Manejo de input de formulario.
useCallback: Evita cálculos innecesarios dentro de funciones.

Custom Hook
    Ayuda a disociar lógica.

Memoización
    La memoización es una técnica muy útil para evitar cálculos innecesarios en nuestro código. Guardamos el resultado de nuestros cálculos cada
    vez que los hacemos para no tener que repetirlos en el futuro. En otras palabras, estamos ahorrando grandes cantidades de tiempo a cambio de
    mucho espacio de almacenamiento.
    Se implementa solamente en funciones puras (siempre devuelven el mismo resultado con los mismos argumentos). No se tiene que implementar
    para resultados de llamados a API o fechas.

¿Cómo funciona PureComponent?
    PureComponent es una clase de React muy similar a React.Component, pero por defecto el método shouldComponentUpdate compara las props nuevas
    y viejas, si no han cambiado, evita volver a llamar el método render del componente. Esta comparación se llama Shallow Comparison.

¿Cómo funciona y cuándo debo usar React.memo?
    Si useEffect es el reemplazo del ciclo de vida en componentes creados como funciones con React Hooks, React.memo es el reemplazo de PureComponent.

Desde React 17, no es indispensable importar React en todos los componentes. */