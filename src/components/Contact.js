import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";


class Contact extends React.Component {
  // onSubmit = () => {
  //   alert("Thank you for your message. You will receive a response within 24-48 hours. For immediate assistance or if someone you know is in danger please call 911") 
  // }
  myClick = () => {alert("Thank you for your message, we will respond within 24-48 hours.")}
 
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={10} />
          </FormControl>

          <Button  onClick={this.myClick} type="submit" href="/main" variant="contained" color="primary" size="medium">
            Send
          </Button>

      
        </form>
      </div>
    );
  }
}

export default Contact;
