import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import Message from "./components/Chat/Message";
import MessageForm from "./components/Chat/MessageForm";
import MessageList from "./components/Chat/MessageList";

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
  // state = {
  //   messages: []
  // };

  // handleNewMessage = (text) => {
  //   this.setState({
  //     messages: [...this.state.messages, { me: true, author: "Me", body: text }],
  //   });
  // }
  render() {
    return (
      <div className="App">
        <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
        <Message />
        <Route exact path="/" component={NewUser} />
        <Route
          path="/signin"
          render={() => <SignIn updateUser={this.updateUser} />}
        />
        <Route path="/newuser" component={NewUser} />
        <Route path="/main" component={SearchResults} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}
export default App;
