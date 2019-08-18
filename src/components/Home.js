import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import Video from "../sunset.mp4";

class Home extends React.Component {
  render() {
    return (
      <div>
        <video id="video-bg" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <canvas id="myCanvas" />
      </div>
    );
  }
}
export default Home;
