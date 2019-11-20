import React, { Component } from 'react';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const theme = createMuiTheme({
  palette: {
    primary:
    {
      main: "#37474f",
      light: "#fffde7"
    },
    secondary:
    {
      main: "#fffde7",
    }
  },
  status: {
    danger: 'orange',
  },
  typography:
  {
    h1: {
      fontSize: '25vw',
      color: "#e0f2f1"
    },
  },
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundColor: "#37474f"
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
