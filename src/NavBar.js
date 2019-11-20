import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import { sizing, spacing } from '@material-ui/system';


const styles = {
  root: {
    flexGrow: 1
  },
  AppBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgb(47,79,79);opacity:0.8",
    minHeight: "10vh",
    borderStyle: "solid",
    position: "fixed",
    top: 0
  },
  Menu:
  {
    display: "flex",
    marginTop: "8vh"

  },
  MenuTitle:
  {
    color: "#FFFFFF",
    fontSize: "5vh"
  },
  MenuIcon:
  {
    color: "#FFFFFF",
    fontSize: "6vh"
  },
  MenuItem:
  {
    width: "15vw",
    height: "10vh"
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

        <AppBar className={classes.AppBar}>

          <IconButton onClick={this.handleClick}>
            <MenuIcon className={classes.MenuIcon} />
            <Typography className={classes.MenuTitle}>Menu</Typography>
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
              <Link underline="none" component="a" href='/'>
                <Typography variant='h4'>Home</Typography>

              </Link>

            </MenuItem>
            <MenuItem onClick={this.handleClose} className={classes.MenuItem}>
              <Link underline="none" href='/aboutMe'>
                <Typography variant='h4'>About me</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose} className={classes.MenuItem}>
              <Link underline="none" href='/projects'>
                <Typography variant='h4'>My Projects</Typography>
              </Link>
            </MenuItem>
          </Menu>

        </AppBar>
      </div >
    );
  }
}

export default withStyles(styles)(NavBar);
