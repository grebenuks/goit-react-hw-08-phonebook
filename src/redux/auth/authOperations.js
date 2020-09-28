import axios from 'axios';
import actions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = param => async dispatch => {
  dispatch(actions.registrationRequest);
  try {
    const response = await axios.post('/users/signup', param);

    token.set(response.data.token);
    dispatch(actions.registrationSuccess(response.data));
  } catch (error) {
    dispatch(actions.registrationError(error.message));
  }
};

export const logIn = param => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const response = await axios.post('/users/login', param);

    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};
