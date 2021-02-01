""" ¿Por qué graficar?
        1) Reconocimiento de patrones.
        2) Predicción de una serie.
        3) Simplifica la interpretación y las conclusiones acerca de los datos.

    Primero, hay que buscar si hay un patrón.

    Graficado simple
        1) Bokeh permite construir gráficas complejas de manera rápida y con comando simples.
        2) Permite exportar a varios formatos, com HTML, notebooks, imágenes, etc.
        3) Se puede utilizar en el servidor con Flask y Django. """
from bokeh.plotting import figure, output_file, show

if __name__ == '__main__':
    output_file('graficado_simple.html')
    fig = figure()

    total_vals = int(input('¿Cuántos valores querés graficar?\n'))
    x_vals = list(range(total_vals))
    y_vals = []

    for i in x_vals:
        val = int(input(f'Valor Y para {i}:\n'))
        y_vals.append(val)

    fig.line(x_vals, y_vals, line_width=2)

    show(fig)