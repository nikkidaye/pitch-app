import React, { Component } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import TwilioChat from "twilio-chat";
import $ from "jquery";
import "./Chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: null,
      channel: null
    };
  }

  handleNewMessage = text => {
    if (this.state.channel) {
      this.state.channel.sendMessage(text);
    }
  };
  getToken = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        messages: [...this.state.messages, { body: `Connecting...` }]
      });

      $.getJSON("/token", token => {
        this.setState({ username: token.identity });
        resolve(token);
      }).fail(() => {
        reject(Error("Failed to connect."));
      });
    });
  };

  addMessage = message => {
    const messageData = {
      ...message,
      me: message.author === this.state.username
    };
    this.setState({
      messages: [...this.state.messages, messageData]
    });
  };

  componentDidMount = () => {
    this.getToken()
      .then(this.createChatClient)
      .then(this.joinGeneralChannel)
      .then(this.configureChannelEvents)
      .catch(error => {
        this.setState({
          messages: this.addMessage({ body: "..." })
        });
      });
  };
  createChatClient = token => {
    return new Promise((resolve, reject) => {
      resolve(new TwilioChat(token.jwt));
    });
  };
  joinGeneralChannel = chatClient => {
    return new Promise((resolve, reject) => {
      chatClient
        .getSubscribedChannels()
        .then(() => {
          chatClient
            .getChannelByUniqueName("general")
            .then(channel => {
              this.addMessage({ body: "Joining general channel..." });
              this.setState({ channel });

              channel
                .join()
                .then(() => {
                  this.addMessage({
                    body: `Joined general channel as ${this.state.username}`
                  });
                  window.addEventListener("beforeunload", () =>
                    channel.leave()
                  );
                })
                .catch(() => reject(Error("Could not join general channel.")));

              resolve(channel);
            })
            .catch(() => this.createGeneralChannel(chatClient));
        })
        .catch(() => reject(Error("Could not get channel list.")));
    });
  };
  createGeneralChannel = chatClient => {
    return new Promise((resolve, reject) => {
      this.addMessage({ body: "Creating general channel..." });
      chatClient
        .createChannel({ uniqueName: "general", friendlyName: "General Chat" })
        .then(() => this.joinGeneralChannel(chatClient))
        .catch(() => reject(Error("Could not create general channel.")));
    });
  };

  configureChannelEvents = channel => {
    channel.on("messageAdded", ({ author, body }) => {
      this.addMessage({ author, body });
    });

    channel.on("memberJoined", member => {
      this.addMessage({ body: `${member.identity} has joined the channel.` });
    });

    channel.on("memberLeft", member => {
      this.addMessage({ body: `${member.identity} has left the channel.` });
    });
  };

  render() {
    return (
      <div className="Chat">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}

export default Chat;
