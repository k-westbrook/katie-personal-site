import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import sea from './sea.mp4';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import FireplaceTwoToneIcon from '@material-ui/icons/FireplaceTwoTone';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';


const styles = {
  mainTitle:
  {
    fontSize: "15vh",
    textAlign: "center",
    marginTop: "3vh",
    color: "#FFFFFF",
    marginBottom: "8vh",
    borderBottomStyle: "solid",
    paddingBottom: "2vh"

  },
  contactPageContainer: {
    marginTop: "11vh",
    padding: '5vh'
  },
}



class Contact extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.contactPageContainer}>
        <div>

          <Typography variant='h1' className={classes.mainTitle}>Contact Me</Typography>
        </div>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography>Email Me @ kcheriewestbrook@gmail.com</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography>Connect with me on LinkedIn</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography>Check out my GitHub Account</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}


export default withStyles(styles)(Contact)
