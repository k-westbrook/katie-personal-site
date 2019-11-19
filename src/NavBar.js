import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { sizing, spacing } from '@material-ui/system';


const styles = {
  root: {
    flexGrow: 1
  },
  AppBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e0f2f1",
    minHeight: "10vh"
  },
  Menu:
  {
    display: "flex",

  },
  MenuItem:
  {

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
      <div className={classes.root}>

        <AppBar position="static" className={classes.AppBar}>

          <IconButton onClick={this.handleClick}>
            <MenuIcon />
            <Typography>Katie Westbrook</Typography>
          </IconButton>

          <Menu className={classes.Menu}
            open={open}
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
            <MenuItem onClick={this.handleClose} className={classes.MenuItem}>
              <Link to='/'>
                <h4>Home</h4>
              </Link>

            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to='/projects'>
                <h4>Trips</h4>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link to='/cats'>
                <h4> Cats</h4>
              </Link>
            </MenuItem>

            <MenuItem onClick={this.handleClose}>

              <Link to='/photo-gallery'>
                <h4>Seattle</h4>
              </Link>
            </MenuItem>
          </Menu>

        </AppBar>
      </div >
    );
  }
}

export default withStyles(styles)(NavBar);
