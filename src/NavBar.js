import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'

const styles = {

  AppBar: {
    display: "flex",
    flexDirection: "row"
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
    const { anchorEl } = this.state
    const open = Boolean(anchorEl);

    return (
      <div >

        <AppBar position="static" className={classes.AppBar}>

          <IconButton onClick={this.handleClick}>
            <MenuIcon />
            <Typography>Katie Westbrook</Typography>
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
