""" Búsqueda lineal
    -Busca en todos los elementos de manera secuencial.
    -Cuál es el peor caso. """

import random

# Búsqueda lineal.
def busqueda_lineal(lista, objetivo):
    match = False

    for elemento in lista:
        if elemento == objetivo:
            match = True

    return match

if __name__ == '__main__':
    tamanio_lista = int(input('¿De qué tamaño será la lista? '))
    objetivo = int(input('¿Qué número querés buscar? '))

    lista = [random.randint(0, 100) for i in range(tamanio_lista)]
    encontrado = busqueda_lineal(lista, objetivo)

    print(f'El elemento {objetivo} {"está" if encontrado else "no está"} en la lista.')

