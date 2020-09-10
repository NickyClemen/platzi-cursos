import Singleton from './Singleton';

// Forma de demostrar que Singleton expone una sola instancia.
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("¿A es igual a B?", a === b);

