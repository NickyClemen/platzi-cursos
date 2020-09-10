class Singleton {

    // Singleton teienen tres propiedades, métodos.
    // Instancia privada y estática.
    private static instance: Singleton;

    // Constructor es privado.
    private constructor() {

        // init

    }

    static getInstance() {

        if (!Singleton.instance) {

            Singleton.instance = new Singleton;

        }

        return Singleton.instance;

    }

}

export default Singleton;