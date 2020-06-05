import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationPage from './components/RegistrationPage';
import Login from './components/login/Login';
//import axios from 'axios';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code></code> Welcome to Bus booking

        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </header>
     
    </div>
  );
}

export default App;
