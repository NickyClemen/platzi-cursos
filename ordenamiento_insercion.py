""" Ordenamiento por inserción (Insertion Sort)
        Es intuitivo y fácil de implementar, pero es muy ineficiente para listas de gran tamaño.
        Una de las características del ordenamiento por inserción es que ordena en "su
        lugar." Es decir, no requiere memoria adicional para realizar el ordenamiento
        ya que simplemente modifican los valores en memoria.

        Una lista es dividida entre una sublista ordenada y otra sublista desordenada.
        Al principio, la sublista ordenada contiene un solo elemento, por lo que por
        definición se encuentra ordenada.
        A continuación, se evalua el primer elemento dentro la sublista desordenada para
        que podamos insertarlo en el lugar correcto dentro de la lista ordenada.
        La inserción se realiza al mover todos los elementos mayores al elemento que
        se está evaluando un lugar a la derecha.
        Continúa el proceso hasta que la sublista desordenada quede vacía y, por lo
        tanto, la lista se encontrará ordenada. """
import random

def ordenamiento_por_insercion(lista):
    for i in range(1, len(lista)):
        valor_actual = lista[i]
        posicion_actual = i

        while posicion_actual > 0 and lista[posicion_actual - 1] > valor_actual:
            lista[posicion_actual] = lista[posicion_actual - 1]
            posicion_actual -= 1

        lista[posicion_actual] = valor_actual

    return lista

if __name__ == '__main__':
    tamano_lista = int(input('¿De qué tamaño será la lista?\n'))

    lista = [random.randint(0, 100) for i in range(tamano_lista)]
    lista_ordenada = ordenamiento_por_insercion(lista)

    print(lista_ordenada)