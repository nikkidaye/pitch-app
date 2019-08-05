import React, { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList';

let counter = 0; 

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      author: "",
    }
  }

  handleNewMessage = (text) => {
    counter++;
    console.log(counter);
    if (counter % 2 === 0) {
      this.setState({
        messages: [...this.state.messages, { me: true, author: "Kelly", body: text }],
      })
    } else { 
      this.setState({
        messages: [...this.state.messages, { me: true, author: "Joe", body: text }],
      })
    }
  }




  render() {

    return (
      <div className="Chat">
        <MessageList messages={this.state.messages} author={this.state.author} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}

export default Chat;
