class Persona {

    constructor(nombre, apellido, altura){
    
        this.nombre = nombre;

        this.apellido = apellido;

        this.altura = altura;

    }

    saludar(){

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
        
    }

    soyAlto(){

        return this.altura > 1.8;

    }

}

// Herencia = Extensión.

class Desarrollador extends Persona{

    constructor(nombre, apellido, altura){

        super(nombre, apellido, altura) // Llamar al constructor de la clase padre.
            
    }

    saludar(){

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`); 

    }

}

var nicole = new Persona('Nicole', 'Ordoqui', 1.72);

// var cirilla = new Persona('Cirilla', 'Rusch', 1.65);

// var ivan = new Persona('Ivan', 'Rusch', 1.89); 

var ivan = new Desarrollador('Ivan', 'Rusch', 1.89); 

