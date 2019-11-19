import React, { Component } from 'react';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:
    {
      main: '#9e9e9e',
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
