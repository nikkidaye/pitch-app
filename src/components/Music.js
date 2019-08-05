import React from "react";
import ReactDOM from "react-dom";
const nineThirtySix = "https://www.youtube.com/watch?v=TQJ5BjXDtvY";
const sevenFourOne = "https://www.youtube.com/watch?v=cd4bBMw3qDY";
const fiveTwoEight = "https://www.youtube.com/watch?v=zsHJHcGCGU8";
const fourSeventeen = "https://www.youtube.com/watch?v=I_FpVaV1pHc";
const confidence = "https://www.youtube.com/watch?v=PZv5iNxjYpU";
const brainPower = "https://www.youtube.com/watch?v=b_DcQHbJIfE";
const enhance = "https://www.youtube.com/watch?v=b_DcQHbJIfE&list=RDb_DcQHbJIfE&start_radio=1&t=5";
const cleanseEnergy = "https://www.youtube.com/watch?v=EBbA1TVHVXs&list=RDb_DcQHbJIfE&index=2";
const bobEnergy = "https://www.youtube.com/watch?v=lxbqeQf6O-k&list=PLs5G32duA1WEfB6ncURivjUMpDxKODFaZ";





function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class App extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "sevenFourOne":
          track = sevenForOne;
          break;
        case "nineThirtySix":
          track = nineThirtySix;
          break;
          case "fiveTwoEight":
            track = fiveTwoEight;
            break;
            case "fourSeventeen":
              track = fourSeventeen;
              break;
            case "confidence":
                track = confidence;
                break;
            case "brainPower":
                  track = brainPower;
                break;
            case "enhance":
                  track = enhance;
            break;
            case "cleanseEnergy":
              track = cleanseEnergy;
              break;
              case "bobEnergy":
                track = bobEnergy;
                break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  render() {
    const list = [
      { id: 1, title: "sevenFourOne" },
      { id: 2, title: "nineThirtySix" },
      { id: 3, title: "fiveTwoEight" },
      { id: 4, title: "fourSeventeen"},
      { id: 5, title: "confidence"},
      { id: 6, title: "brainPower"},
      { id: 7, title: "enhance" },
      { id: 8, title: "cleanseEnergy"},
      { id: 9, title: "bobEnergy" },

    ].map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
          {item.title}
        </li>
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <div>
        <h2>My Little Player</h2>
        <ul>{list}</ul>
        <div>
          {this.state.player === "paused" && (
            <button onClick={() => this.setState({ player: "playing" })}>
              Play
            </button>
          )}
          {this.state.player === "playing" && (
            <button onClick={() => this.setState({ player: "paused" })}>
              Pause
            </button>
          )}
          {this.state.player === "playing" || this.state.player === "paused" ? (
            <button onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </button>
          ) : (
            ""
          )}
        </div>
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div>
            {currentTime} / {duration}
          </div>
        ) : (
          ""
        )}
        <audio ref={ref => (this.player = ref)} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
