var nicole = {

    Nombre: 'Nicole',
    Apellido: 'Ordoqui',
    Edad: 27,
    Ingeniero: true,
    Cocinero: false,
    Cantante: false,
    DJ: false,
    Guitarrista: false,
    Drone: true

}

function imprimirProfesiones(persona){

    console.log(`${persona.Nombre} es: `);
    
    if(persona.Ingeniero){

        console.log('Ingeniero.');

    } else{

        console.log('No es ingeniero.');

    }

    if(persona.cocinero){

        console.log('Cocinero.');

    } else{

        console.log('No es cocinero.');

    }

    if(persona.DJ){

        console.log('DJ.');

    } else{

        console.log('No es DJ.');

    }

    if(persona.Guitarrista){

        console.log('Guitarrista.');

    } else{

        console.log('No es guitarrista.');

    }

    if(persona.Drone){

        console.log('Vuela drones.');

    }else{

        console.log('No vela drones.');

    }

    if(persona.Cantante){

        console.log('Cantante.');

    }else{

        console.log('No es cantante.');

    }

}

imprimirProfesiones(nicole);