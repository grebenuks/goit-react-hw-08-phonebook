import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../auth/authSelector';

const PublicRoute = ({
  component: Component,
  isAuth,
  restricted,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth && restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
});
export default connect(mapStateToProps)(PublicRoute);
