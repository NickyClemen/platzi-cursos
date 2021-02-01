""" Introducción a la optimización
        1) Permite resolver muchos problemas de manera computacional.
        2) Una función objetivo que debemos maximizar o minimizar.
        3) Una serie de limitantes que debemos respetar. """
def morral(tamanio_morral, pesos, valores, n):
    if n == 0 or tamanio_morral == 0:
        return 0

    if pesos[n - 1] > tamanio_morral:
        return morral(tamanio_morral, pesos, valores, (n - 1))

    return max((valores[n - 1] + morral((tamanio_morral - pesos[n - 1]), pesos, valores, (n - 1))), morral(tamanio_morral, pesos, valores, (n - 1)))

if __name__ == '__main__':
    valores = [60, 100, 120]
    pesos = [10, 20, 30]
    tamanio_morral = 5
    n = len(valores)

    resultado = morral(tamanio_morral, pesos, valores, n)
    print(resultado)
