import axios from 'axios';
import {
  getFormValueSuccess,
  getFormValueFetch,
  getFormValueError,
  getFormValue,
} from './actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const getFormValueFireBase = () => async dispatch => {
  try {
    const response = await axios.get(`/contacts`);
    const keys = Object.keys(response.data);

    const resArr = keys.reduce((acc, key) => {
      acc.push({ id: key, ...response.data[key] });
      return acc;
    }, []);

    dispatch(getFormValue(resArr));
  } catch (error) {
    console.log(error.message);
  }
};

export const postFormValueAsync = param => async dispatch => {
  dispatch(getFormValueFetch());
  try {
    const response = await axios.post(`/contacts`, param);
    dispatch(getFormValueSuccess({ ...param, id: response.data.name }));
  } catch (error) {
    dispatch(getFormValueError(error.message));
  } finally {
    dispatch(getFormValueFetch());
  }
};

export const deleteContactAsync = contactId => async () => {
  try {
    await axios.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.log(error.message);
  }
};
