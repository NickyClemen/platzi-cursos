# CameraReviews System

## Problema a resolver
La empresa "RandomCameraReviews", necesita un sistema que permita que fotágrafos profesionales suban "reviews" de cámaras fotográficas, para que cualquier persona desde cualquier parte del mundo pueda buscar los los reviews y comprarlas a través de su portal.
La empresa, cuenta con un equipo de developers especializado en frontend que realizará un portal para que los editores suban los "reviews" y los usuarios puedan verlos, y han solicitado que tú, como especista en backend, les proporciones un sistema, incluyendo API que permita  realizar lo siguiente:

    * Subir reviews de cámaras fotográficas.
    * Obtener el contenido de los reviews para mostrarlo en vistas del portal en sus versiones web y mobile.
    * Manejo de usuarios para editores (no incluye visitantes que leen los reviews).

También se sabe que la empresa "RandomCameraReviews" planea distribuir mayormente en América del Sur, dénde está su mercado más grande, pero también tienen ventas en Norteamérica, Europa, y muy pocas en Asia.

### Alcance(Scope)

#### Casos de uso
    * El editor debe poder subir reviews de una cámara.
    * El editor debe poder subir una review de una lenta para cámaras.
    * Usuarios no registrados pueden leer reviews.

#### Out of Scope (casos de uso no Soportados)
    * Usuarios no registrados no pueden subir reviews de una cámara.
    * ...

## Arquitectura

### Diagramas

### Modelo de datos

### Testing
    *Crear proyecto de pruebas que valide los siguientes casos de uso
        -Registrar usuario, crear review y simular que visitante pueda leerlo.

### Integración continua

## Limitaciones
    * Llamada a la API que permite subir un review, no excede los límites de latencia 500ms.
    * Llamadas al API que permite obtener reviews para lectura, deben tener una latencia menor a 100ms.
    * No se soporta más de diez llamadas por segundo.

## Costo
Considerando 1000 usuarios diarios, que visitan recurrentemente cada hora:
    * 1000 llamadas diarias a serverless functions. $XX.XX
    * 1000 read/write units diarias a X Database on-demand. $XX.XX
    Total: $xx.xx (al mes/dia/año)
