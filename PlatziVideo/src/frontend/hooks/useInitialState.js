import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  /* Con useState se maneja el estado. Recibe datos para inicializar el estado.
    useEffect permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente. Se pueden manejar las
    transmisiones entre componentes. También queda escuchando cambios. */
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  // Nombre de la variable, función que permite actualizart la variable.

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => error.message);
  }, []); /* Recibe una función anónima, y un parámetro para estar escuchando las props que puedan cambiar.
    Si no se pasa, se crea un loop infinito. Por defecto, cuando no enviamos un segundo argumento,
    React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen.
    En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.*/

  return videos;
};

export default useInitialState;
