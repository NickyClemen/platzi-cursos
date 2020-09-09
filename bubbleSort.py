# Los algoritmos de ordenamiento, se encargan de darle un nuevo orden lógico a un set de datos.
# Bubble sort: Va comparando de a pares, y los va colocando en el orden definido. Es un algoritmo bastante
# lento, ya que se necesitan dos bucles:
#   1) El primero, recorre todo el algoritmo.
#   2) Se encarga de ir ordenando de a pares.
# Tiene que hacer muchas iteraciones para llegar al resultado final.
# Big O notation (set de normas). Cuanto más elementos se le agreguen al algoritmo, más lento es.

# Definir variable.
def bubbleSort(array):
    n = len(array)

    for i in range(n):
        print(array)
        for j in range(0, n - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]

array = [190, 1200, 1, 2, 4, 55, 1000, 6, 800]
bubbleSort(array)

print("Arreglo ordenado de forma ascendente es ")

for i in range(len(array)):
    print("%d"%array[i]),

