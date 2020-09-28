import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import avatar from './avatar.png';
import '../Header/navigation.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="avatar-container">
      <img className="avatar" src={avatar} alt="avatar" width="32" />
      <span className="name">Welcome, {name} </span>
      <button className="logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
export default UserMenu;
