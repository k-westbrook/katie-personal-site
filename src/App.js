import React, { Component } from 'react';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css';
import { MuiThemeProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary:
      { main: '#9e9e9e' },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar />
            <Routes />
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
