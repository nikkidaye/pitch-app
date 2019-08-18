import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Contact from "./components/Contact";
<<<<<<< HEAD
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
=======

import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";

import TipsComponent from "./components/TipsComponent";
import Chat from "./components/Chat";
 import Music from "./components/Music";

import Footer from "./components/Footer";
import Chat from "./components/Chat";

>>>>>>> master

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
<<<<<<< HEAD
      
=======
>>>>>>> master
        <Route path="/newuser" component={NewUser} />
        <Route path="/main" component={SearchResults} />
        <Route path="/contact" component={Contact} />
        <Route path="/music" component={Music} />
        <Route path="/tipscomponent" component={TipsComponent} />
        <Route path="/chat" component={Chat} />
        <Footer />

      </div>
    );
  }
}
export default App;
