import React from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";

class MessageForm extends React.Component {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.input.focus();
  };

  onMessageSend = event => {
    event.preventDefault();
    this.props.onMessageSend(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleFormSubmit}>
        <div className="input-container">
          <input
            type="text"
            ref={node => (this.input = node)}
            placeholder="Type here to get help from a mental health professional..."
          />
        </div>
        <div className="button-container">
          <button type="submit">Send </button>
        </div>
      </form>
    );
  }
}

export default MessageForm;
