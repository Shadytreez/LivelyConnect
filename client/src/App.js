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
import ProfilePage from './pages/ProfilePage';
import Logo from './image/Logo.png';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
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
          <NavLink className="nav-link" exact to="/profile">
            Profile
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="/sign-in">
            Sign in/Log Out
          </NavLink>
        </li> */}
        <AuthButton />
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <img src={Logo}  width="1000" height="100"/>
        <div class="row">
        <AuthProvider>
        <Router>
        <div class="col-sm-2 "> 
          <Navigation />
          </div>
          <div class="col-sm-10"> 
          
           
              <Switch>
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="/sign-up" component={SignUpPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            
          
          </div>
        </Router>
        </AuthProvider>
        </div>
        </div>
    );
  }
}


export default App;
