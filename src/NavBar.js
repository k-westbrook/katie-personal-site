import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div>

        <Link to='/'>
          <h4>Home</h4>
        </Link>

        <Link to='/projects'>
          <h4>Projects</h4>
        </Link>

        <Link to='/aboutme'>
          <h4> About Me</h4>
        </Link>

        <Link to='/photo-gallery'>
          <h4>Photo Gallery</h4>
        </Link>

      </div >
    );
  }
}

export default NavBar;
