import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import App from './App';
import { IconButton } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}
class NavBar extends Component {
  constructor() {
    super()
    this.state =
      {
        isOpen: false,
        anchorE1: null
      }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(evt) {
    let bool = this.state.isOpen;
    console.log(bool)
    this.setState(
      {
        isOpen: !bool,
        anchorE1: evt.currentTarget
      }
    )
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <div >
        <AppBar>
          <IconButton className={classes.menuButton} onClick={this.handleClick}>
          </IconButton>
          <Menu open={this.state.isOpen}
            onClose={this.handleClose}
          >
            <MenuItem>
              <Link to='/'>
                <h4>Home</h4>
              </Link>

            </MenuItem>
            <MenuItem>
              <Link to='/projects'>
                <h4>Projects</h4>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/aboutme'>
                <h4> About Me</h4>
              </Link>
            </MenuItem>

            <MenuItem>

              <Link to='/photo-gallery'>
                <h4>Photo Gallery</h4>
              </Link>
            </MenuItem>
          </Menu>

        </AppBar>
      </div >
    );
  }
}

export default withStyles(styles)(NavBar);
