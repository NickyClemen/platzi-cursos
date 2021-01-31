/* Instalar Next
    1) Por CLI: yarn create next-app
    2) Manual
        npm init -y
        yarn add next react react-dom
        create pages folder

Routing
    1) Ruta estática (básica): /about/ | /home
    2) Rutas dinámicas: Se generan de forma consecutiva dependiendo de variables.

Host reloading
Fast refresh

Routing basado en el file system: Estructura el routing basado en los archivos que está en la carpeta
de pages.

Routing dinámico
    Se crea con corchetes.
    Lo estático de la URL, va con una carpeta dentro de pages.
    Los archivos dinámicos se nombran [variable].js

Code Splitting
    Next hashea los assets para solucionar el caché.
    chunk: Sección o parte mínima que corresponde a las páginas.

Pre-render (Server Side Render - SSR)
Prefetching

Las APIs van dentro de una carpeta llamada API en pages.

Debbuing en Next
    "dev": "NODE_OPTIONS=-'-inspect' next"

Extender Document
    Document (root de Next) - Estructura
        _document.js
            application
        App.js - root de React
                pages

Extender App
    _app.js

Path alias - Se utilizan para evitar importaciones de componentes muy largas.
    '../../components/' - import hell - dot hell
    En TS: tsconfig.json
    En JS: jsconfig.json

CSS en Next
    1) Global CSS (.css): Un style.css en el root del proyecto. El import va en el _app.js.
    2) Module CSS (.module.css): El module.css se aplica para cada módulo en específico. Va en la carpeta
    junto al componente.
    Se importa en el componente y se utiliza con alias.
    Los nombres de las clases vienen hasheados para evitar que colisionen las clases.
    3) CSS-in-JS Styled JSX (Propia de Next): Dentro del componente:
        <style jsx>`{ CSS }`</style>

Data fetching y pre-rendering
    isomotphic significa que funciona para el servidor y el cliente.

    Se pueden utilizar solamente en las páginas.
    1) Static Side Rendering.
        Static Generation: getStaticProps

        export const getStaticProps = async () => {
            fetch('/api/avo) - No se puede utilizar con rutas relativas.
                .then(response => response.json())
                .then(({ data }) => {})
            return {
                props: {}
            }
        }

        El request a la API se hace una única vez cuando se buildea el proyecto (build time).

    2) Con SSR.
        export const getServerSideProps = async () => {
            fetch('/api/avo) - No se puede utilizar con rutas relativas.
                .then(response => response.json())
                .then(({ data }) => {})
            return {
                props: {}
            }
        }

        Las llamadas a las APIs se hacen "bajo demanda": Se hace un llamadado a la API por
        cada request del usuario.

    3) Client Side.
        useEffect siempre se ejecuta en el navegador (Client Side).

    4) Dynamic Static Generation: getStaticPaths: Se le pasa las páginas que se necesitan.
        export const getStaticPaths = async () => {
            return {
                paths: [
                    { params: { id: ... },  }
                ],
                incremental static generation
                fallback: false, Página que no esté especificada, retorna un 404.
                Con true, se activa el ISSG.
            };
        }

        export const getStaticProps = async (context) => {
            condt { params } = context;

            fetch('/api/avo/${ query.id }) - No se puede utilizar con rutas relativas.
                .then(response => response.json())
                .then(({ data }) => {})
            return {
                props: {}
            }
        }

Deployment SSG en Next
    Exportar archivos estáticos en Next
        package.json
            "scripts": {
                "export": "next export"
            }

Midiendo performance
    _app.js
        export function reportWebVitals(metric) {
            console.log(metric);
            serverAnalytics.log(metric);
        }

Futuro de Nextjs
    Incremental Static Side Generation: Mezcla entre SSR y SSG.

Nextjs 10
    yarn upgrade-interactive --latest: Actualiza las dependencias.

    Soporte a React 17 y Webpack 5.

    Es compatible con todas las versiones.

    Nextjs Image (co creado con ingenieros de Google)
        Componente de imagen para mejorar la performance.
        Lazzy loading: Se cargan las imágenes cuando son visibles en la pantalla.
        Optimiza el tamaño de las imágenes según el width y height.

    Link y Proxy
        <Link key={ id } href={ `/product/${ id }` } passHref />

    Rewrites: Se tiene control de las url.

    Se tiene que crear en el root un next.config.js */