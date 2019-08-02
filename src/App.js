import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SingleCategory from "./components/SingleCategory";
import UserProfile from "./components/UserProfile";
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewUser from "./components/NewUser";

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
  };

  updateUser = userObject => {
    this.setState(userObject);
  };



  render() {
    return (
      <div className="App">
        <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/" component={NewUser} />
        <Route
          path="/signin" component={SignIn} />}
        <Route path="/selected" component={SingleCategory} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route path="/main" component={SearchResults} />
        <Route path="/contact" component={Contact} />

      </div>
    );
  }
}

export default App;
