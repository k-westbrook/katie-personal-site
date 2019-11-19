import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className='nav-link-box'>
            <Link to='/'>
              <h4>Home</h4>
            </Link>
          </div>
          <div className='nav-link-box'>
            <Link to='/projects'>
              <h4>Projects</h4>
            </Link>
          </div>
          <div className='nav-link-box'>
            <Link to='/aboutme'>
              <h4> About Me</h4>
            </Link>
          </div>
          <div className='nav-link-box'>
            <Link to='/photo-gallery'>
              <h4>Photo Gallery</h4>
            </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default NavBar;
