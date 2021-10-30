import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import AboutUsPage from './pages/AboutUsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="navbar-brand" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Host/Join Event
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Profile
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/sign-in">
            Sign in/Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
        <Router>
        <div class="col-sm-2"> 
          <Navigation />
          </div>
          <div class="col-sm"> 
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
          </div>
        </Router>
        </div>
        </div>
    );
  }
}


export default App;
