import React, { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Kelly", body: text }],
    })
  }

  render() {
    return (
      <div className="Chat">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}

export default Chat;
