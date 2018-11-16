import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/login/LoginPage'
import SignUpPage from './components/signup/SignUpPage'
import LogoutPage from './components/login/LogoutPage'
import EventListContainer from './components/EventListContainer'
import Footer from './components/Footer'
import EventDetailsContainer from './components/EventDetailsContainer'
import UserPageContainer from './components/UserPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={EventListContainer}/>
        <Route exact path="/events" component={EventListContainer}/>
        <Route exact path="/events/:id" component={EventDetailsContainer}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/logout" component={LogoutPage}/>
        <Route exact path="/users/:username" component={UserPageContainer}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
