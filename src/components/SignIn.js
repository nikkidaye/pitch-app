import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

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
      .post("/user/signin", {
        username: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("signin response: ");
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

export default SignIn;
