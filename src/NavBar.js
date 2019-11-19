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
    marginLeft: -12,
    marginRight: 20,
  }
}
class NavBar extends React.Component {
  constructor() {
    super()
    this.state =
      {
        auth: true,
        anchorEl: null,
      }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClick(evt) {
    this.setState(
      {
        isOpen: true,
        anchorE1: evt.currentTarget
      }
    )
  }

  handleClose = () => {
    this.setState({ anchorEl: null, isOpen: false });
  };
  render() {
    const { classes } = this.props;


    return (
      <div >

        <AppBar>
          <IconButton className={classes.menuButton} onClick={this.handleClick}>
            <MenuIcon />
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
