""" Búsqueda binaria
    1) Divide y conquista.
    2) El problema se divide en dos en cada iteración.
    Este algoritmo asume que la lista está ordenada.
    Ordenar y luego usar búsqueda binaria, depende de cuántas veces se va a usar el algoritmo. Si se va a utilizar varias
    veces, se amortiza el costo de estar ordenando en cada nueva iteración.
    Se puede cambiar tiempo por espacio. """

import random

def busqueda_binaria(lista, comienzo, final, objetivo):
    if comienzo > final:
        return False

    medio = (comienzo + final) // 2

    if lista[medio] == objetivo:
        return True
    elif lista[medio] < objetivo:
        return busqueda_binaria(lista, medio + 1, final, objetivo)
    elif lista[medio] > objetivo:
        return busqueda_binaria(lista, comienzo, medio - 1, objetivo)

if __name__ == '__main__':
    tamanio_lista = int(input('¿De qué tamaño es la lista?\n'))
    objetivo = int(input('¿Qué número querés encontrar?\n'))

    lista = sorted([random.randint(0, 100) for i in range(tamanio_lista)])

    encontrado = busqueda_binaria(lista, 0, len(lista), objetivo)

    print(lista)
    print(f'El elemento {objetivo} {"está" if encontrado else "no está"} en la lista.') 
