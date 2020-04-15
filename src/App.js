import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./Pages/Utility/Login'));
const Register = React.lazy(() => import('./Pages/Utility/Register'));
const Page404 = React.lazy(() => import('./Pages/Utility/Page404'));
const Page500 = React.lazy(() => import('./Pages/Utility/Page500'));
const Home = React.lazy(() => import('./Pages'));

class App extends Component {

  render() {
    return (
      <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/" name="Home Page" render={props => <Home {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
