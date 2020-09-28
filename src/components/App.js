import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import { getCurrentUser } from '../redux/auth/authOperations';
import PrivateRoute from '../redux/auth/PrivateRoute';
import PublicRoute from '../redux/auth/PublicRoute';

const Home = lazy(() => import('../View/Home'));
const Login = lazy(() => import('../View/Login'));
const Register = lazy(() => import('../View/Register'));
const Contacts = lazy(() => import('../View/Contacts'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<p>...Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute
              path="/login"
              restricted
              component={Login}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/register"
              restricted
              component={Register}
              redirectTo="/contacts"
            />
            <PrivateRoute
              path="/contacts"
              component={Contacts}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// function App() {
//   return (
//     <>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//         <Route path="/contacts" component={Contacts} />
//       </Switch>
//     </>
//   );
// }
