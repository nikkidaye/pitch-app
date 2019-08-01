
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
		}
	}


	render() {

	  return (
	    <Container component="main" maxWidth="xs">
	      <CssBaseline />
	      <div className={useStyles.paper}>
	        <Avatar className={useStyles.avatar}>
	          <LockOutlinedIcon />
	        </Avatar>
	        <Typography component="h1" variant="h5">
	          Welcome New User!
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
	                autoFocus
	              />
	            </Grid>
	            <Grid item xs={12} sm={6}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                id="lastName"
	                label="Last Name"
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
	          >
	            Sign Up
	          </Button>
	          <Grid container justify="flex-end">
	            <Grid item>
	              <Link href="#" variant="body2">
	                Already have an account? Sign in
	              </Link>
	            </Grid>
	          </Grid>
	        </form>
	      </div>
	    </Container>
	  )};
}

export default NewUser;



// import React, { Component } from 'react'
// import axios from 'axios'
//
// class NewUser extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 		    email: '',
// 			password: '',
// 			confirmPassword: '',
//
// 		}
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 		this.handleChange = this.handleChange.bind(this)
// 	}
// 	handleChange = (event) => {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		})
// 	}
// 	handleSubmit = (event) => {
// 		console.log('sign-up handleSubmit, username: ')
// 		console.log(this.state.username)
// 		event.preventDefault()
//
// 		//request to server to add a new username/password
// 		axios.post('/user/', {
// 			username: this.state.username,
// 			password: this.state.password
// 		})
// 			.then(response => {
// 				console.log(response)
// 				if (!response.data.errmsg) {
// 					console.log('successful signup')
// 					this.setState({ //redirect to login page
// 						redirectTo: '/login'
// 					})
// 				} else {
// 					console.log('username already taken')
// 				}
// 			}).catch(error => {
// 				console.log('signup error: ')
// 				console.log(error)
//
// 			})
// 	}
//
//
// render() {
// 	return (
// 		<div className="SignupForm">
// 			<h4>Sign up</h4>
// 			<form className="form-horizontal">
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="username">Username</label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							type="text"
// 							id="username"
// 							name="username"
// 							placeholder="Username"
// 							value={this.state.username}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="password">Password: </label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							placeholder="password"
// 							type="password"
// 							name="password"
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group ">
// 					<div className="col-7"></div>
// 					<button
// 						className="btn btn-primary col-1 col-mr-auto"
// 						onClick={this.handleSubmit}
// 						type="submit"
// 					>Sign up</button>
// 				</div>
// 			</form>
// 		</div>
//
// 	)
// }
// }
//
// export default NewUser ;
