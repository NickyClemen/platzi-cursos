""" Ordenamiento por mezcla (Merge Sort)
    Es un algortimo de "divide y conquista" (divide and conquer): Primero divide una lista en partes iguales,
    hasta que quedan sublistas de uno o cero elementos; luego, las recombina en forma ordenada.
    Lo inventó John von Neumann. """
import random

def ordenamiento_por_mezcla(lista):
    if len(lista) > 1:
        medio = len(lista) // 2

        izquierda = lista[:medio]
        derecha = lista[medio:]

        # Llamado recursivo para crear sublistas.
        ordenamiento_por_mezcla(izquierda)
        ordenamiento_por_mezcla(derecha)

        # Iteradores de las sublistas.
        i = 0
        j = 0

        # Iterador de la lista principal.
        k = 0

        while i < len(izquierda) and j < len(derecha):
            if izquierda[i] < derecha[j]:
                lista[k] = izquierda[i]
                i += 1
            else:
                lista[k] = derecha[j]
                j += 1

            k += 1

        while i < len(izquierda):
            lista[k] = izquierda[i]
            i += 1
            k += 1

        while j < len(derecha):
            lista[k] = derecha[j]
            j += 1
            k += 1

    return lista

if __name__ == '__main__':
    tamano_lista = int(input('¿De qué tamaño será la lista?\n'))

    lista = [random.randint(0, 100) for i in range(tamano_lista)]
    lista_ordenada = ordenamiento_por_mezcla(lista)

    print(lista_ordenada)