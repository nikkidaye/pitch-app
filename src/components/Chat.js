import React, { Component } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "./Chat.css";
import { isUserWhitespacable } from "@babel/types";

let counter = 0;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      author: ""
    };
  }

  handleNewMessage = text => {
    counter++;
    console.log(counter);
    if (counter % 2 === 0) {
      this.setState({
        messages: [
          ...this.state.messages,
          { me: true, author: "Dr.FeelGood", body: text }
        ]
      });
    } else {
      this.setState({
        messages: [
          ...this.state.messages,
          { me: true, author: "Kelly", body: text }
        ]
      });
    }
  };

  render() {
    return (
      <div className="chatcontainer">
        <h2>You are now live!</h2>
        <h4>Type below to chat with a licensed therapist..</h4>
        <div className="Chat">
          <MessageList
            messages={this.state.messages}
            author={this.state.author}
          />
          <MessageForm onMessageSend={this.handleNewMessage} />
        </div>
      </div>
    );
  }
}

export default Chat;
