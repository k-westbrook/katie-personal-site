import React, { Component } from 'react';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
    )
  }
}

export default App;
