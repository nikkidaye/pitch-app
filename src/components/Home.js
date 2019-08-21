import React from "react";
import "../App.css";
import Video from "../sunset.mp4";

class Home extends React.Component {
  render() {
    return (
      <div id="homediv">
      <video id="video-bg" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <h1 className="title">Keep Showing Up</h1> 
        
          <p className="slogan">"Inspiration to Keep Going and Be Your Best Self, Supporting You on Your Mental Health Journey"</p>
          <canvas id="myCanvas" />
          <div className="homebttn">
            <button className="homebutton">
              <a href="/newuser">
              Get Started
              </a>
            </button>
          </div>
        </div>
        
    );
  }
}
export default Home;
