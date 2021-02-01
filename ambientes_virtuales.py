""" Ambientes virtuales
        Son muy importantes, porque Python se ejecuta de manera global dentro de la PC.
        Se necesitan los ambientes virtuales para que el global no quede contaminado.
            1) Permiten aislar el ambiente para poder instalar diversas versiones de paquetes.
            2) A partir de Python 3, se incluye en la librería estándar en el módulo venv.

        PIP
            1) Permite descargar paquetes de terceros.
            2) Permite compartir paquetes con terceros.
            3) Permite controlar el versionado.

        Crear ambiete virtual
            python -n venv [name_environment]

        Activar ambiente virtual
            source env/bin/activate
            deactivate para salir

            pip freeze para listar dependencias instaladas
            Se recomienda instalar siempre en virtual environment, nunca de manera global. """