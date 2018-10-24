import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LoginPage from './components/login/LoginPage'
import SignUpPage from './components/signup/SignUpPage'
import LogoutPage from './components/login/LogoutPage'
import EventListContainer from './components/EventListContainer'
import Footer from './components/Footer'
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={EventListContainer}/>
        <Route exact path="/events" component={EventListContainer}/>
        <Route exact path="/events/:id" component={EventDetailsContainer}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/logout" component={LogoutPage}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
