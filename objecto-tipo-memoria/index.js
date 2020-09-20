/* Un objeto es una referencia a un espacio en memoria.
Cada vez que un usuario inicializa una variable, se crea un espacio en memoria, mediante las
coordenadas (no se necesita saber el valor).
Se guarda la referencia, o el dato en sí.

Hay dos tipos de memoria:
    1) Stack: El acceso a la información es más rápido. Se guardan, por lo general, un tipo
    de dato primitivo. Cuando se inicializa una variable con un tipo de dato primitivo,
    se van apilando (por eso stack). Al declarar una variable, se hace referencia un espacio de
    memoria determinada.
    2) Heap: A diferencia de stack, acá se puede almacenar mayor caudal de datos, y el acceso
    a la información es más lento. No se apilan, sino que se declaran de forma desordenada en
    cualquier espacio de memoria. Al declarar una variable, lo que se crea es un pointer
    (o indicador, coordenada) en el stack. No se guarda en la memoria, sino que redirecciona al
    valor almacenado en otro espacio. */

