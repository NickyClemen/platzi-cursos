import axios from 'axios';

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

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return ((dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        windows.location.href = redirectUrl;
      })
      .catch(error => dispatch(setError(error)));
  });
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return ((dispatch) => {
    axios.post({
      url: '/auth/sign-in',
      method: 'POST',
      auth: { username: email, password },
    })
      .then(({ data }) => {
        document.cookie = `email=${ data.user.email }`;
        document.cookie = `name=${ data.user.name }`;
        document.cookie = `id=${ data.user.id }`;

        dispatch(loginRequest(data.user));
      })
      .then(() => {
        windows.location.href = redirectUrl;
      })
      .catch(error => dispatch(setError(error)));
  });
};
