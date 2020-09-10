/* Patrón Singleton y sasos de uso 
Singleton (Creacional)
Es un patrón que te asegura que un clase solo tiene una instancia (se aegura que la clase pueda
crear una sola instancia de sí misma). Ésta única instancia, puede ser
consumida por cualquier otro objeto. 
Para describir patrones se utiliza UML, y se describe así:
    -instance: Singleton (Nombre de la clase)
        En las propiedades, tenemos el instance, que tiene un símbolo negativo.
        Ésto indica que es una propiedad privada. También está subrayada, lo que significa que es un método
        estático.
    -Singleton()
    +getInstance():Singleton 
        Lo que sigue, es un constructor. Se lo puede distinguir porque tiene el mismo nombre que la clase. 
        El constructor es privado para evitar nuevas instancias de la clase. 
        Luego, hay un método que sí es público, y lo que hace es hacer un get para chequear si hay 
        instancias del objeto. Si no la hay, la va crear y la va a regresar. */