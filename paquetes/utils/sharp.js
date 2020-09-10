const sharp = require('sharp');
// Procesar imágenes.

sharp('imagen.png')
    .resize(80) // Cambia el tamaño.
    .grayscale() // Escala de grises.
    .toFile('resized.png') // Crea un archivo nuevo.
    .catch(error => console.log(error.message));