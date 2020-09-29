import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    const user = { email, password };
    dispatch(logIn(user));
    setEmail('');
    setpassword('');
  };
  return (
    <form className="reg-log-form" onSubmit={handleSubmit}>
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
        Sign in
      </button>
    </form>
  );
};
export default Login;
