""" Tipos de datos abstractos, clases e instancias
    Tipo de datos abstractos: Tipo de dato creado por el programador.
        En Python, todo es un objeto y tiene un tipo.
        Objeto: Todo tipo creado tiene una representación en memoria.
        Tipo: Se pueden encapsular los datos como el comportamiento dentro de un solo objeto.
    Formas de interactuar con un objeto:
        -Creación
        -Manipulación
        -Destrucción

    Ventajas
        -Decomposición: Dividir el objeto en otros más pequeños.
        -Abstracción
        -Encapsulamiento: Manejar ciertos atributos de manera privada.

    Instancias
        -Mientras que la clase es el molde, a los objetos creados se les conoce como instancias.
        -Cuando se crea una instancia, se ejecuta el método __init__.
        -Todos los métodos de una clase reciben implícitamente como primer parámetro 'self'.
        -Los atributos de clase nos permiten:
            1) Representar datos.
            2) Procedimientos para interactiar con los mismos (métodos).
            3) Mecanismos para esconder la representación interna.
        -Se accede a los atributos con notación de punto.
        -Se puede tener atributos privados. Por convención, comienza con '_'.
            -Variables privadas
            -Variables de instancia: Las que se inicializan en el constructor.
            -Métodos

Decomposición
    -Partir un problema en problemas más pequeños.
    -Las clases permiten crear mayores abstracciones en forma de componentes.
    -Cada clase se encarga de una parte del problema, y el programa se vuelve más fácil de mantener.

Abstracción
    -Enfocarnos en la información relevante. Crear una interfaz con la que podemos interactuar con cualquier tipo de objeto,
    sin importarnos en cómo funciona.
    -Separar la información central de los detalles secundarios.
    -Podemos utilizar variables y métodos (privados o públicos).

Funciones: Base de los decorators
    Los decorators son una forma sencilla de llamar funciones de orden mayor, es decir, funciones que toman otra
    función cómo parámetro y/o retornan otra función como resultado. De esta forma, un decorator añade capacidades a
    una función sin modificarla.

    En Python, las funciones son objetos de primera-clase, es decir, que pueden ser pasados y utilizados cómo argumentos
    al igual que cualquier otro objeto (strings, enteros, flotantes, listas, etc).

Setters, Getters y decorator property
    Metaprogramación (metaprogramming), ya que una parte del programa trata de modificar a otra durante el tiempo de
    compilación. En tanto un decorator básicamente toma una función, le añade alguna funcionalidad y la retorna.

    property()
        Crea y retorna la propiedad de un objeto. La propiedad de un objeto posee los métodos getter(), setter() y del().
        En tanto la función tiene cuatro atributos: property(fget, fset, fsel, fdoc):
            fget: Trae el valor de un atributo.
            fset: Define el valor de un atributo.
            fdel: Elimina el valor de un atributo.
            fdoc: Crea un docstring por atributo.

                class Millas:
                    def __init__(self):
                        self._distancia = 0

                    # Función para obtener el valor de _distancia
                    def obtener_distancia(self):
                        print("Llamada al método getter")
                        return self._distancia

                    # Función para definir el valor de _distancia
                    def definir_distancia(self, recorrido):
                        print("Llamada al método setter")
                        self._distancia = recorrido

                    # Función para eliminar el atributo _distancia
                    def eliminar_distancia(self):
                        del self._distancia

                    distancia = property(obtener_distancia, definir_distancia, eliminar_distancia)

                # Creamos un nuevo objeto
                avion = Millas()

                # Indicamos la distancia
                avion.distancia = 200

    Decorator @property
        Nos permite utilizar getters y setters.
            class Millas:
                def __init__(self):
                    self._distancia = 0

                # Función para obtener el valor de _distancia
                # Usando el decorador property
                @property
                def obtener_distancia(self):
                    print("Llamada al método getter")
                    return self._distancia

                # Función para definir el valor de _distancia
                @obtener_distancia.setter
                def definir_distancia(self, valor)
                    if valor < 0:
                        raise ValueError("No es posible convertir distancias menores a 0.")
                    print("Llamada al método setter")
                    self._distancia = valor

            # Creamos un nuevo objeto
            avion = Millas()

            # Indicamos la distancia
            avion.distancia = 200


Encapsulación, getters y setters
    -Permite agrupar datos y su comportamiento en un mismo lugar.
    -Controla el acceso a dichos datos.
    -Previene modificaciones no autorizadas.

    Defensive programming: Restringue la modificación y acceso a los datos.

Herencia
    -Permite modelar una jerarquía de clases.
    -Permite compartir comportamiento común en la jerarquía.
    -Al padre se le conoce como 'superclase' y al hijo como 'subclase'.

Polimorfismo
    -Habilidad de tomar varias formas.
    -En Python, nos permite cambiar el comportamiento de una superclase para adaptarlo a la subclase. """

# Instancia de una clase.
class Coordenada:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distancia(self, otra_coordenada):
        x_diff = (self.x - otra_coordenada.x) ** 2
        y_diff = (self.y - otra_coordenada.y) ** 2

        return (x_diff + y_diff) ** 0.5

# Decomposición
class Automovil:
    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color
        self._estado = 'en_reposo'
        self._motor = Motor(cilindros=4)

    def acelerar(self, tipo_aceleracion='despacio'):
        if tipo_aceleracion == 'rapida':
            self._motor.inyecta_gasolina(10)
        else:
            self._motor.inyecta_gasolina(3)

        self._estado = 'en_movimiento'

class Motor:
    def __init__(self, cilindros, tipo='gasolina'):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0

    def inyecta_gasolina(self, cantidad_gasolina):
        pass

# Abstracción
class Lavadora:
    def __init__(self):
        pass

    def lavar(self, temperatura='caliente'):
        self._llenar_tanque_agua(temperatura)
        self._aniadir_jabon()
        self._lavar()
        self._centrigufar()

    def _llenar_tanque_agua(self, temperatura):
        print(f'Llenando el tanque con agua {temperatura}.')

    def _aniadir_jabon(self):
        print('Añadiendo jabón.')

    def _lavar(self):
        print('Lavando la ropa.')

    def _centrigufar(self):
        print('Centrifugando la ropa.')

# Encapsulación, getters y setters
class CasillaDeVotacion:
    def __init__(self, indentificador, pais):
        self._identificador = indentificador
        self._pais = pais
        self._region = None

    @property # Decorator para definir un getter.
    def region(self):
        return self._region

    @region.setter
    def region(self, region):
        try:
            if region in self._pais:
                self._region = region
        except:
            raise ValueError(f'La región {region} no es válida en {self._pais}.')

# Herencia
class Rectangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

class Cuadrado(Rectangulo):
    def __init__(self, lado):
        super().__init__(lado, lado)

# Polimorfismo
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def avanza(self):
        print('Estoy caminando.')

class Ciclista(Persona):
    def __init__(self, nombre):
        super().__init__(nombre)

    def avanza(self):
        print('Estoy pedaleando.')

if __name__ == '__main__':
    coordenada_uno = Coordenada(3, 30)
    coordenada_dos = Coordenada(4, 8)

    lavadora = Lavadora()
    # lavadora.lavar()

    casilla = CasillaDeVotacion(123, ['Ciudad de Buenos Aires', 'CABA'])
    # print(casilla.region)

    casilla.region = 'Lanús'
    # print(casilla.region)

    rectangulo = Rectangulo(base=3, altura=4)
    # print(rectangulo.area())

    cuadrado = Cuadrado(lado=5)
    # print(cuadrado.area())

    persona = Persona('Nicole')
    persona.avanza()

    ciclista = Ciclista('Ivan')
    ciclista.avanza()

    # print(f'La distancia es de {coordenada_uno.distancia(coordenada_dos)}.')
    # print(isinstance(coordenada_dos, Coordenada)) # Verifica si un objeto es instancia de una clase.


