import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

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
  CardContent:
  {
    display: "flex",

  },
  Card:
  {
    marginBottom: "4vh",
    width: "30vw"
  },
  CardContainer:
  {
    display: "flex",
    flexDirection: "column",
  },
  cardHolder:
  {
    display: "flex",
    justifyContent: "center"
  }
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
        <div className={classes.CardContainer}>
          <div className={classes.cardHolder}>
            <Link underline="none" a href="mailto:kcheriewestbrook@gmail.com">
              <Card className={classes.Card}>
                <CardActionArea>
                  <CardContent className={classes.CardContent}>
                    <MailOutlineIcon />
                    <Typography variant="p">Email Me at kcheriewestbrook@gmail.com</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
          <div className={classes.cardHolder}>
            <Link underline="none" a href=" https://www.linkedin.com/in/katherine-westbrook/">
              <Card className={classes.Card}>
                <CardActionArea>
                  <CardContent className={classes.CardContent}>
                    <LinkedInIcon />
                    <Typography variant="p">Connect with me on LinkedIn</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
          <div className={classes.cardHolder}>
            <Link underline="none" a href="https://github.com/k-westbrook">
              <Card className={classes.Card}>

                <CardActionArea>
                  <CardContent className={classes.CardContent}>
                    <GitHubIcon />
                    <Typography variant="p">Check out my GitHub Account</Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Link>
          </div>
        </div>
      </div >
    )
  }
}


export default withStyles(styles)(Contact)
