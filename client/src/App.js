import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LoginPage from './components/login/LoginPage'
import SignUpPage from './components/signup/SignUpPage'
import LogoutPage from './components/login/LogoutPage'
import GamesContainer from './components/GamesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={GamesContainer}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/logout" component={LogoutPage}/>
      </div>
    );
  }
}

export default App;
