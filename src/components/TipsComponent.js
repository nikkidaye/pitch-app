import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Slider from '@material-ui/core/Slider';
import {teal} from '@material-ui/core/colors';
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    // backgroundColor: teal.A200,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: teal.A200,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardMedia: {
    paddingTop: '30%', // 16:9
  },
  cardContent: {
    flexGrow: 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

          <Typography id="reminder" variant="h6" color="inherit" noWrap>
          Keep Showing Up cares for you, and your physical and mental well being. Be sure to look here for new life tips every week.



          </Typography>
        </Toolbar>
      </AppBar>
      <main>
  {/* Hero unit */}
{/*section 1*/}

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography id="header"  component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Keep Showing Up Mental Health Tips!
            </Typography>
            <Typography id="apply" variant="h5" align="center" color="textSecondary" paragraph>
              Apply these tips to your daily life in order to have a happier state of mind.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="5">

  {/* End hero unit */}
  {/* Card One */}

          <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={3} sm={5} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://unsplash.com/photos/DFtjXYd5Pto"
                    title="Keep Showing Up"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    REST!
                    </Typography>
                    <Typography>
                      Get a good night's rest.
                      Make sure to give yourself an 8-hour block of sleep each night. Sleep is very important.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
{/*card number 2 i think*/}

          <Grid container spacing={1}>
          {cards.map(card => (
            <Grid item key={card} xs={3} sm={5} md={4}>
            <Card className={classes.card}>
            <CardMedia
          className={classes.cardMedia}
          image="https://unsplash.com/photos/DFtjXYd5Pto"
          title="Keep Showing Up"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          Eat Breakfast
          </Typography>
          <Typography>
            Sit down and eat a nutritious breakfast. Studies show that a rich and hearty breakfast can help improve mood and mental performance throughout your day.
            </Typography>
            </CardContent>
            </Card>
            </Grid>
          ))}
            </Grid>

{/*card number 3 i think*/}


            <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={3} sm={5} md={4}>
              <Card className={classes.card}>
              <CardMedia
            className={classes.cardMedia}
            image="https://unsplash.com/photos/DFtjXYd5Pto"
            title="Keep Showing Up"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            Pay Attention
            </Typography>
            <Typography>
              Pay attention and love yourself. Spend time doing things that you enjoy. Do not neglect the things that make you upset,sad, and happy!
              </Typography>
              </CardContent>
              </Card>
              </Grid>
            ))}
              </Grid>




{/*Card number 4*/}
<Grid container spacing={1}>
{cards.map(card => (
  <Grid item key={card} xs={3} sm={5} md={4}>
  <Card className={classes.card}>
  <CardMedia
className={classes.cardMedia}
image="https://unsplash.com/photos/DFtjXYd5Pto"
title="Keep Showing Up"
/>
<CardContent className={classes.cardContent}>
<Typography gutterBottom variant="h5" component="h2">
Opposites Attract
</Typography>
<Typography>
  Counter negative thoughts with positive ones. Negative thoughts do not have to consume you.
  If you are feeling anxious or nervous each negative thought, should be followed with a positive.
  </Typography>
  </CardContent>
  </Card>
  </Grid>
))}
  </Grid>


















      </main>
      {/* Footer */}
      <footer className={classes.footer}>

        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          You are important!
        </Typography>

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
