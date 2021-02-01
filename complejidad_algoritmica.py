""" Introducción a la complejidad algorítmica
        La complejidad algorítmica, nos permite comparar la eficiencia entre dos diferentes algoritmos. A su vez, permite
        predecir el tiempo que se va a tardar en resolver un problema.

        Complejidad temporal: Lo que tarda el algoritmo en ejecutar. T(n) = Determina el tiempo en el que se va a tardar la ejecución.
        Complejidad espacial: Cuánto espacio en memoria se necesita para poder resolver un problema.

        Aproximaciones
            -Cronometrar el tiempo en el que corre un algoritmo.
            -Contar los pasos con una medida abstracta de operación.
            -Contar los pasos conforme nos aproximamos al infinito.

Notación asintótica (Big O Notation) - Conforme el input crece hasta el infinito.
    -No importan variaciones pequeñas.
    -El enfoque se centra en lo que pasa conforme el tamaño del problema se acerca al infinito.
    -Mejor de los casos, promedio, peor de los casos. Hay que estar preparados para medir el algoritmo en el peor de los casos.
    -Big O (mide el peor de los casos). Hay algoritmos que miden los demás. Nada más importa el término de mayor valor.

Clases de complejidad algorítmica
    1) O(1). Constante. No importa cúanto crezca el input, el algoritmo se va a tardar el mismo tiempo.
    2) O(n). Lineal. Crecer de manera proporcional con respecto al input.
    3) O(log n). Logarítmico. La función va a crecer de manera logarítmica con respecto al input: Va a crecer mucho al principio,
    pero luego se va estabilizando y seguir creciendo, pero en menor proporción.
    4) O(n log n). log lineal. Crece de manera logarítmica, pero con una constante.
    5) O(n**2). Polinomial.
    6) O(2**n). Exponencial. No es utilizable.
    7) O(n!). No es utilizable. """

import time
import sys

def factorial(n):
    respuesta = 1

    while n > 1:
        respuesta *= n
        n -= 1

    return respuesta

def factorial_r(n):
    if n == 1:
        return 1

    return n * factorial_r(n - 1)

# Conteo abstracto de operación
def f(x): # Mide la ejecución del programa.
    respuesta = 0 # 1

    for i in range(1000): # 1000
        respuesta += 1 # Sin importar el tamaño de X, va a correr 1000 veces.

    for i in range(x): # x
        respuesta += x # Loop que depende del valor de X.

    for i in range(x):
        for j in range(x):
            respuesta += 1
            respuesta += 1 # x * x = x2 = 2x**2

    return respuesta # 1
    """ Crecimiento de la función: 1002 + x + 2x**2 - El término de mayor peso es x**2. Las constantes no tienen peso en el
    crecimiento del programa. """

# Big O Notation. Interesa el índice más grande sin ningún tipo de coeficiente previo.
# Ley de la suma
def fn(n):
    for i in range(n):
        print(i)

    for i in range(n):
        print(i)
        # O(n) + O(n) = O(n + n) = O(2n) = O(n) -> Tiene crecimiento lineal con respecto a n.

# Ley de la suma
def fnx(n):
    for i in range(n):
        print(i)

    for i in range(n * n):
        print(i)
        # O(n) + O(n * n) = O(n + n**2) = O(n**2) -> Función cuadrática.

# Ley de la multiplicación
def fnm(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
        # O(n) * O(n) = O(n * n) = O(n**2) -> Crecimiento cuadrático.

# Recursividad múltiple
def finobacci(n):
    if n == 0 or n == 1:
        return 1

    return finobacci(n - 1) + finobacci(n - 2)
    # O(2**n) -> Crecimiento exponencial.


if __name__ == '__main__':
    # Aumenta el límite de la recursión soportada.
    sys.setrecursionlimit(1500)

    n = 1000

    comienzo = time.time()
    factorial(n)
    final = time.time()
    print(final - comienzo)

    comienzo_r = time.time()
    factorial_r(n)
    final_r = time.time()
    print(final_r - comienzo_r)