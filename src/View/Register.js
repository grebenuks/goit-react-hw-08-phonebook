import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../redux/auth/authOperations';

import './view.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const user = { name, email, password };
    dispatch(registration(user));
    setName('');
    setEmail('');
    setpassword('');
  };
  return (
    <form className="reg-log-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name
        <input
          className="form-input"
          onChange={evt => setName(evt.target.value)}
          value={name}
        />
      </label>
      <label className="form-label">
        Email
        <input
          className="form-input"
          onChange={evt => setEmail(evt.target.value)}
          value={email}
        />
      </label>
      <label className="form-label">
        Password
        <input
          type="password"
          className="form-input"
          onChange={evt => setpassword(evt.target.value)}
          value={password}
        />
      </label>
      <button className="form-button" type="submit">
        Register
      </button>
    </form>
  );
};
export default Register;
