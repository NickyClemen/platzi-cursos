/* Describe la acción, y pasa un objecto que va a estar disponible dentro del reducer, el cuál
toma el action, y evalúa como lo almacena en el store. */
export const setFavorite = payload => ({
  type: 'SET_FAVORITE', // Nombre con la que se describe la acción.
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
