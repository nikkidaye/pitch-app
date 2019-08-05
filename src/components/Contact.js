import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { cyan } from '@material-ui/core/colors';
import {deepOrange} from '@material-ui/core/colors';


class Contact extends React.Component {
  render() {
    return (      
      <div
        style={{

          backgroundColor: deepOrange.A400,
          // primary:
          // secondary: //#ef5350
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

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
        <video autoPlay id="background-video" controls loop autoPlay>
          // <source controls loop autoPlay src="https://www.youtube.com/watch?v=GOFtYeo64JE&feature=youtu.be" type="link"></source>
          <source controls loop autoPlay src="http://video2.ignitemotion.com/files/mp4/Looping_Clouds.mp4" type="video/mp4"></source>
          <source controls loop autoPlay src="flying_through_clouds.mov" type="mov" ></source>


          Your browser does not support the video tag.
        </video>


      </div>
    );
  }
}

export default Contact;
