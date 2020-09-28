import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelector';
import './navigation.css';

const Navigation = ({ isAuth }) => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-link">
          <NavLink
            exact
            to="/"
            className="nav-link-item"
            activeClassName="nav-link-item-active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          {isAuth && (
            <NavLink
              to="/contacts"
              className="nav-link-item"
              activeClassName="nav-link-item-active"
            >
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
