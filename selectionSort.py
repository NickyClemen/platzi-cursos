# Selection sort.
# Es un algoritmo un poco más eficiente que Bubble Sort.
# Lineamientos:
#  1) Siempre que se esté ordenando de menor a mayor, siempre va a encontrar el número más chico, y lo va a mandar
#   al inicio. La poición que reemplaza, lo manda al final.
# 2) Se tienen dos arrays dentro del mismo. El primero, es el que se crea ordenado, y el array desordenado.
#   Se va restando un índice al array desordenado para saber que se va achicando.

array = [20, 5, 21, 6, 23, 7, 34, 68, 999, 72, 3, 100]

def selectionSort(array):
    # Recorre el array.
    for i in range(len(array)):
        # Encuentra el valor mínimo dentro del array. Es importante saber en qué índice se quedó el array
        # desordenado.
        idxDes = i;
        for j in range(i + 1, len(array)):
            if array[idxDes] > array[j]:
                idxDes = j
        # Al encontrar el valor mínimo, reemplazar.
        array[i], array[idxDes] = array[idxDes], array[i]

selectionSort(array)

print("Arreglo ordenado de forma ascendente es ")

for i in range(len(array)):
    print("%d"%array[i])