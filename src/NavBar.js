import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'

import App from './App';
import { Icon } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -900
  }
}
class NavBar extends React.Component {
  constructor() {
    super()
    this.state =
      {
        anchorEl: null,
      }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClick(evt) {
    this.setState(
      {
        isOpen: true,
        anchorEl: evt.currentTarget
      }
    )
  }

  handleClose = () => {
    this.setState({ anchorEl: null, isOpen: false });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl, isOpen } = this.state
    const open = Boolean(anchorEl);

    return (
      <div >

        <AppBar position="static">
          <IconButton className={classes.menuButton} onClick={this.handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu open={open}
            onClose={this.handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to='/'>
                <h4>Home</h4>
              </Link>

            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to='/projects'>
                <h4>Projects</h4>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to='/aboutme'>
                <h4> About Me</h4>
              </Link>
            </MenuItem>

            <MenuItem onClick={this.handleClose}>

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
