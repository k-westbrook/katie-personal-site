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
    fontSize: "8vh",
    textAlign: "center",
    marginTop: "3vh",
    color: "#FFFFFF",
    marginBottom: "2vh",
    borderBottomStyle: "solid",
    paddingBottom: "2vh"
  },
  contactPageContainer: {
    marginTop: "8vh",
    padding: '1vh',
    height: "75vh"
  },
  CardContent:
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"

  },
  Card:
  {
    marginBottom: "4vh",
    width: "95vw",
    backgroundColor: "#F5F5F5",
  },
  CardContainer:
  {
    display: "flex",
    flexDirection: "column",
    marginTop: "5vh"
  },
  cardHolder:
  {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    fontSize: "2.5vh"
  },
  icon:
  {
    fontSize: "8vh",
    marginRight: "2vw"
  }
}



class ContactMobile extends Component {

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
                    <MailOutlineIcon className={classes.icon} />
                    <Typography className={classes.text} variant="p">Email me at kcheriewestbrook@gmail.com</Typography>
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
                    <LinkedInIcon className={classes.icon} />
                    <Typography className={classes.text} variant="p">Connect with me on LinkedIn</Typography>
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
                    <GitHubIcon className={classes.icon} />
                    <Typography className={classes.text} variant="p">Check out my GitHub Account</Typography>
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


export default withStyles(styles)(ContactMobile)
