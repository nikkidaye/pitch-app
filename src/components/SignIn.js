import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSignIn = e => {
    e.prevemtDefault();
    console.log("handleSignIn");

    axios
      .post("/user/signin", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            email: res.data.email
          });
          this.setState({ redirectTo: "/" });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

<<<<<<< HEAD
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </input>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}

export default SignIn;
=======
export default SignIn;
>>>>>>> 0092d034e56522ee2299ef7233287ca247e62991
