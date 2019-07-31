import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Contact from "./components/Contact";
import NewUser from "./components/NewUser";
import SignIn from "./components/SignIn";
import SingleCategory from "./components/SingleCategory";
import UserProfile from "./components/UserProfile";
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

// const API_KEY = "duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("http://localhost:4000/user/").then(res => {
      console.log("Get User response: ");
      console.log(res.data);
      if (res.data.user) {
        console.log("Get User: There is a user saved in server: ");
        this.setState({
          loggedIn: true,
          email: res.data.user.email
        });
      } else {
        console.log("Get User: no user");
        this.setState({
          loggedIn: false,
          email: null
        });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn && <p>Welcome, {this.state.email}!</p>}
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => <SignIn updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <NewUser />} />
        <Route path="/selected" render={() => <SingleCategory />} />
        <Route path="/profile/:id" render={() => <UserProfile />} />
        <Route path="/main" render={() => <SearchResults />} />
        <Route path="/contact" render={() => <Contact />} />
      </div>
    );
  }
}

export default App;
