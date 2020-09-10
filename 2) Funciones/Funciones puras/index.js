/* Función pura -> Retorna siempre el mismo resultado, no importa cuántas veces
se la ejecute. El resultado es predecible. */

// Función pura.
const double = (x) => x * 2;
const isGreaterThan = (value, comparison) => value > comparison;

// Función no pura  -> El resultado es variable.
const time = () => new Date().toLocaleDateString();