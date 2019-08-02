import { Redirect } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
=======
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1484199316358-d7acb93729f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1372&q=80)'


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

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirectTo: null
    };
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
          Sign in
        </Typography>
        <form className={useStyles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={useStyles.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  )};
}

>>>>>>> 40ace73b3f69474ec83f555f1c1f45b8b7dd871b

<<<<<<< HEAD
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");

    axios
<<<<<<< HEAD
      .post("/user/login", {
=======
      .post("/user/signin", {
>>>>>>> 40ace73b3f69474ec83f555f1c1f45b8b7dd871b
        username: this.state.email,
        password: this.state.password
      })
      .then(response => {
<<<<<<< HEAD
        console.log("login response: ");
=======
        console.log("signin response: ");
>>>>>>> 40ace73b3f69474ec83f555f1c1f45b8b7dd871b
        console.log(response);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });

          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="email">
                  Username
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">
                  Password:{" "}
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7" />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
=======
// class SignIn extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: "",
  //     password: "",
  //     redirectTo: null
  //   };
  // }
//
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };
//
//   handleSubmit = event => {
//     event.preventDefault();
//     console.log("handleSubmit");
//
//     axios
//       .post("/user/signin", {
//         username: this.state.email,
//         password: this.state.password
//       })
//       .then(response => {
//         console.log("signin response: ");
//         console.log(response);
//         if (response.status === 200) {
//           this.props.updateUser({
//             loggedIn: true,
//             username: response.data.username
//           });
//
//           this.setState({
//             redirectTo: "/"
//           });
//         }
//       })
//       .catch(error => {
//         console.log("login error: ");
//         console.log(error);
//       });
//   };
//
//   render() {
//     if (this.state.redirectTo) {
//       return <Redirect to={{ pathname: this.state.redirectTo }} />;
//     } else {
//       return (
//         <div>
//           <h4>Login</h4>
//           <form className="form-horizontal">
//             <div className="form-group">
//               <div className="col-1 col-ml-auto">
//                 <label className="form-label" htmlFor="email">
//                   Username
//                 </label>
//               </div>
//               <div className="col-3 col-mr-auto">
//                 <input
//                   className="form-input"
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <div className="col-1 col-ml-auto">
//                 <label className="form-label" htmlFor="password">
//                   Password:{" "}
//                 </label>
//               </div>
//               <div className="col-3 col-mr-auto">
//                 <input
//                   className="form-input"
//                   placeholder="password"
//                   type="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div className="form-group ">
//               <div className="col-7" />
//               <button
//                 className="btn btn-primary col-1 col-mr-auto"
//                 onClick={this.handleSubmit}
//                 type="submit"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   }
// }
>>>>>>> 944b40551c9be0604478467405ab4f80d5af5c03

export default SignIn;
