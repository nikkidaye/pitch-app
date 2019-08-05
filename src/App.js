import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import Chat from "./components/Chat";

import Chat from "./components/Chat/Chat";
import Music from "./components/Music"


// const API_KEY = "duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA";





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null
    };
  }

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user").then(response => {
      console.log("Get User response: ");
      console.log(response.data);
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
  };
  render() {
    return (


      <div className="App">
        <NavBar />
        <Route exact path="/" component={NewUser} />
        <Route
          path="/signin"
          render={() => <SignIn updateUser={this.updateUser} />}
        />
        <Route path="/newuser" component={NewUser} />
        <Route path="/main" component={SearchResults} />
        <Route path="/contact" component={Contact} />
        <Chat />
      </div>
    );
  }
}
export default App;
