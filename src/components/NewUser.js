import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import '../App.css';
import Video from '../sunset.mp4'


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


class NewUser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '' ,
			email: '',
			password:'',
      loggedIn: false
		}
	}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('this is working')

    axios.post("/user").then(response => {

      console.log("Create User response: ");
      console.log(response);
      if (response.data.user) {
        console.log("Get User: There is a user saved in server: ");
        this.setState({
          loggedIn: true,
          email: response.data.user.email
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null
        });
      }
    });

    this.props.history.push('/main');
  }

	render() {

	  return (
      <div>
        <video id="video-bg" autoPlay loop muted>
          <source id={useStyles.clouds} src= { Video } type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>

    <canvas id="myCanvas"></canvas>


	    <Container component="main" maxWidth="xs" id="position">
	      <CssBaseline />
	      <div className={useStyles.paper} id="position">
	        <Avatar className={useStyles.avatar}>
	          <LockOutlinedIcon />
	        </Avatar>
          <div id="box">
	        <Typography component="h1" variant="h5" id="welcome"
            >Welcome!
          </Typography>
	        <form className={useStyles.form} noValidate>
	          <Grid container spacing={2}>
	            <Grid item xs={12} sm={6}>
	              <TextField
	                autoComplete="fname"
	                name="firstName"
	                variant="outlined"
	                required
	                fullWidth
	                id="firstName"
	                label="First Name"
                  onChange={this.handleChange}
	                autoFocus
	              />
	            </Grid>
	            <Grid item xs={12} sm={6}>
	              <TextField id="makemewhite"
	                variant="outlined"
	                required
	                fullWidth
	                id="lastName"
	                label="Last Name"
                  onChange={this.handleChange}
	                name="lastName"
	                autoComplete="lname"
	              />
	            </Grid>
	            <Grid item xs={12}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                id="email"
	                label="Email Address"
	                name="email"
                  onChange={this.handleChange}
	                autoComplete="email"
	              />
	            </Grid>
	            <Grid item xs={12}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                name="password"
	                label="Password"
	                type="password"
	                id="password"
                  onChange={this.handleChange}
	                autoComplete="current-password"
	              />
	            </Grid>
	          </Grid>
	          <Button
	            type="submit"
	            fullWidth
	            variant="contained"
	            color="primary"
	            className={useStyles.submit}
              onClick={this.handleSubmit}
	          >
	            Sign Up
	          </Button>
	          <Grid container justify="flex-end">
	            <Grid item>
	              <Link href="/signin" variant="body2">
	                Already have an account? Sign in
	              </Link>
	            </Grid>
	          </Grid>
	        </form>
	      </div>
      </div>
	    </Container>
    </div>
	  )};
}

export default NewUser;
