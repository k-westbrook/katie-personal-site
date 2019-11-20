import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { sizing, border } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const styles =
{
  projectPageContainer: {
    marginTop: "11vh",
    padding: '5vh'
  },
  projectsCardContainer:
  {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"

  },
  card:
  {
    width: "25vw",
    minHeight: "40vh",
    marginRight: "3vw",
    marginBottom: "5vh",
    backgroundColor: "#FAFAFA"
  },
  cardContent:
  {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "1vh"
  },
  projectTitle:
  {
    marginBottom: "1vh",
    fontSize: "4vh"
  },
  projectImage:
  {
    marginBottom: "3vh",
    height: "20vh",
    width: "23.5vw"
  },
  projectDescription:
  {
    fontSize: "2.5vh"
  }

}
class Projects extends Component {

  constructor() {
    super()

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.projectPageContainer}>
        <div className={classes.projectsCardContainer}>
          {projects.map(project => {
            return (
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.cardContent}>
                    <CardMedia className={classes.projectImage} src={project.imageURL} component='img' />
                    <CardContent>
                      <Typography className={classes.projectTitle} variant="h4">{project.name}</Typography>
                      <Typography className={classes.projectDescription} variant="p">{project.description}</Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            )
          })}


        </div>
        <h1>
          Projects
        </h1>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);


const projects = [
  {
    name: 'piggybank',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320022/personal-site/Screen_Shot_2019-04-03_at_12.32.46_PM.png',
    description: "A financial web app that allows visualization of a user's finances and budget creation using Plaid API and Recharts",
    link: 'https://piggy-bank-app.herokuapp.com/'
  },
  {
    name: 'QuikExlpr',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320023/personal-site/Screen_Shot_2019-04-03_at_12.32.10_PM.png',
    description: 'A web app that finds a user location via IP address and recommends a destination with weather and activity information using third party APIs',
    link: 'https://quikexplr.herokuapp.com/'
  },
  {
    name: 'Me and Mongo',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320022/personal-site/Screen_Shot_2019-04-03_at_12.31.26_PM.png',
    description: 'A written tutorial that explores how to set up a database with MongoDB and utilize Mongoose ',
    link: 'https://medium.com/@kcheriewestbrook/me-and-mongo-a-exploration-of-mongodb-and-mongoose-7c26a24afa39'
  },
  {
    name: 'West Coast Matching Game',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564121444/personal-site/west-coast.png",
    description: 'A concentration style game that uses React',
    link: 'https://west-coast-matching-game.herokuapp.com/'
  },
  {
    name: 'Third-Party API: Using OpenWeatherMap to Create a Simple App',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564122005/personal-site/api_medium.png",
    description: "Exploration of using a third-party api to call and use data for a user's app",
    link: 'https://medium.com/@kcheriewestbrook/third-party-api-using-openweathermap-to-create-a-simple-app-f3d4d9b3b7f1'
  }
  ,
  {
    name: 'react-photo-book-module',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564122176/personal-site/npm%20package.png",
    description: 'A node package that generates a React component. The component can pass an array of image URLs as a prop which populates rows of images',
    link: 'https://www.npmjs.com/package/react-photo-book-module'
  }
  ,
  {
    name: 'i-agreatable',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1566438724/personal-site/i-agreatable.png",
    description: 'A web app that uses AWS Lambda, AWS API Gateway, and RDS Database to give reviews of restaurants. Visitors can make comments.',
    link: 'https://i-agreatable.herokuapp.com/'
  },
  {
    name: 'i-agreatable API',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1566439136/personal-site/Restaurant-API.png"
    ,
    description: 'Public API that returns restaurants, ratings, reviews and other data points. Made by using AWS Lambda and AWS API Gateway',
    link: 'https://hclla7yjk3.execute-api.us-west-1.amazonaws.com/Production'
  },
  {
    name: 'Help My Data Structures!',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1567057910/personal-site/help-my-ds.png"
    ,
    description: "Web App that lets user learn about data structures while executing and visualizing how each data structure works. ",
    link: 'https://help-my-data-structures.herokuapp.com/'

  },
  {
    name: "What's on your mind?",
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1573062096/personal-site/on-your-mind.png"
    ,
    description: "Web App that lets user post any comment on their mind. Uses React, AWS Lambda/API Gateway and DynamoDB. ",
    link: 'https://whats-on-your-mind.herokuapp.com/'

  }



]
