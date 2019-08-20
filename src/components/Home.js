import React from "react";
import "../App.css";
// import Video from "../sunset.mp4";

class Home extends React.Component {
  render() {
    return (
      
        // {/* <video id="video-bg" autoPlay loop muted>
        //   <source src={Video} type="video/mp4" />
        //   Your browser does not support the video tag.
        // </video>
        // <canvas id="myCanvas" /> */}
        <div className="backgroundpic">
          <div>
            <button className="homebutton">
              Get Started
            </button>
          </div>
          <canvas id="myCanvas" />
        </div>
    );
  }
}
export default Home;
