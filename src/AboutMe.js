import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import keyboard from './keyboard.jpg';
import Typography from '@material-ui/core/Typography';
const styles = {

  titleContainer:
  {

    marginTop: "11vh",
    display: "flex"

  },
  imageContainer:
  {

    backgroundImage: `url(${keyboard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    borderStyle: "solid",
    height: "100vh",
    width: "100vw",

  }
};


class AboutMe extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>


        <div className={classes.titleContainer}>
          <div className={classes.imageContainer}></div>

        </div>
        <div>
          <Typography>About meScroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect.</Typography>
        </div>

      </div>
    )
  }


}


export default withStyles(styles)(AboutMe)
