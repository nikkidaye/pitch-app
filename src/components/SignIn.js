import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                   
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="email">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
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
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SignIn;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// class SignIn extends React.Component {
//   render() {
//     return(
//       <div>Placeholder for SignIn</div>
//     )
//   }
// }
// import axios from "axios";

// class SignIn extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       redirectTo: null
//     };
//   }
//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   handleSignIn = e => {
//     e.prevemtDefault();
//     console.log("handleSignIn");

//     axios
//       .post("/user/signin", {
//         email: this.state.email,
//         password: this.state.password
//       })
//       .then(res => {
//         console.log(res);
//         if (res.status === 200) {
//           this.props.updateUser({
//             loggedIn: true,
//             email: res.data.email
//           });
//           this.setState({ redirectTo: "/" });
//         }
//       })
//       .catch(error => {
//         console.log("login error: ");
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <form>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           >
//             <small id="emailHelp" class="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </input>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//           />
//         </div>
//         <div class="form-group form-check">
//           <input type="checkbox" class="form-check-input" id="exampleCheck1">
//             <label class="form-check-label" for="exampleCheck1">
//               I agree to the Terms of Service and Privacy Policy.
//             </label>
//           </input>
//         </div>
//         <button type="submit" class="btn btn-primary">
//           Sign In
//         </button>
//       </form>
//     );
//   }
// }

// export default SignIn;
