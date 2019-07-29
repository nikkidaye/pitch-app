import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import Contact from "./components/Contact";
import MainCategories from "./components/MainCategories";
import NewUser from "./components/NewUser";
import SignIn from "./components/SignIn";
import SingleCategory from "./components/SingleCategory";
import UserProfile from "./components/UserProfile";
import SearchResults from "./components/SearchResults";

const API_KEY = "duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA";

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
    axios.get("/user/").then(res => {
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
        <Contact />
        <MainCategories />
        <NewUser />
        <SignIn />
        <SingleCategory />
        <UserProfile />
        <SearchResults />
      </div>
    );
  }
}

export default App;
