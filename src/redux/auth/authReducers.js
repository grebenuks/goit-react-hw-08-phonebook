import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authActions';

const initialAuthState = {
  name: '',
  email: '',
};

const user = createReducer(initialAuthState, {
  [actions.registrationSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialAuthState,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [actions.registrationSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [actions.registrationError]: setError,
  [actions.loginError]: setError,
  [actions.logoutError]: setError,
  [actions.getCurrentUserError]: setError,
  [actions.registrationSuccess]: () => null,
  [actions.loginSuccess]: () => null,
  [actions.logoutSuccess]: () => null,
  [actions.getCurrentUserSuccess]: () => null,
  [actions.clearError]: () => null,
});

export default combineReducers({
  user,
  token,
  error,
});
