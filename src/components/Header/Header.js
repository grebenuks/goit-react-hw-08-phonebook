import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from '../userMenu/UserMenu';
import LogAndRegister from '../LogAndRegister/LogAndRegister';
import Navigation from './Navigation';
import './navigation.css';

const Header = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <header className="header">
      <Navigation />
      {token ? <UserMenu /> : <LogAndRegister />}
    </header>
  );
};
export default Header;
