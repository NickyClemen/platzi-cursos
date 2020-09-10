/* Los proxies sirven para interceptar llamadas (es parecido a getters y setters).
Se utilizan HANDLER, las cualés tienen  un concepto que se llama TRAPS: Son interceptores de llamadas.
A diferencia de getters, no opera sobre una propiedad, si no sobre un objeto.
Las llamadas son interceptadas por HANDLER.SET() Y HANDLER.GET().
Permite manipular una llamada antes de que llegue al objeto. 
Así la propiedad existe, la regresamos.
Si no existe, entonces sugerimos una que pueda funcionar.
Para eso eso vamos a usar un algoritmo que se llama Levenshtein. (window.Levenshtein.get).
Ejemplos de levenshtein distance (usa window.Levenshtein).

Proxy retorna un objeto. */

const target = {

    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'

}

const handler = {

    get(obj, prop) {

        if (prop in obj) {

            return obj[prop];

        }

        let suggestion = Object.keys(obj).find(key => {

            return Levenshtein.get(key, prop) <= 3

        });
        // Lista todas las keys del objeto.

        if (suggestion) {

            console.log(`${ prop } no se encuentró. Quisiste decir ${ suggestion }. `);

        }

        return obj[prop];

    }
    /* get() tiene dos argumentos: 
        1) Objeto que se quiere atrapar.
        2) Propiedad que se quiere leer.
            get(obj, prop); */

} /* También es un objeto que tiene funciones, que son las traps especificadas en la documentación. */

const p = new Proxy(target, handler); 
/* Es una clase, así que se tiene que instanciar. 
Recibe dos argumentos:
    1) Target: Objeto que se quiere interceptar.
    2) Handler: Aclaración cuando se intercepta un objeto.
        const p = new Proxy(target, handler); */


