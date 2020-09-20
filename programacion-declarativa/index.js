/* La programación funcional es un paradigma declarativo.
Cuando se programa de manera imperativa, se crean funciones que explican paso a paso cómo
hacer algo. En el declarativo, hay que explicar qué hay que hacer. */
const attrsToString = (obj = {}) => Object.keys(obj).map(item => `${ item }="${ obj[item] }"`).join('');
const tag = t => typeof t === 'string' ? tagAttrs({ tag: t }) : tagAttrs(t);
