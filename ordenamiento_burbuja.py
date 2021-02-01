""" Ordenamiento de burbuja (Bubble Sort)
        Recorre repetidamente una lista que necesita ordenarse. Compara elementos adyacentes, y los
        intercambia si están en el orden incorrecto. Este procedimiento se repite hasta que no se
        requieren más intercambios, lo que indica que la lista se encunetra ordenada.
        Las listas se recorren n*n.
        Tiene la garantía de que el elemento más grande siempre va a estar en la última posición (se recomienda para buscar
        el elemento mayor de una lista de una sola pasada (On)). """
import random

def ordenamiento_de_burbuja(lista):
    n = len(lista)

    for i in range(n): # Complejidad algorítmica: 0(n) * 0(n) = 0(n**2) - Crecimiento polinominial.
        for j in range(0, n - i - 1):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]

    return lista

if __name__ == '__main__':
    tamanio_lista = int(input('¿De qué tamaño será la lista?\n'))

    lista = [random.randint(0, 100) for i in range(tamanio_lista)]
    lista_ordenada = ordenamiento_de_burbuja(lista)

    print(lista_ordenada)