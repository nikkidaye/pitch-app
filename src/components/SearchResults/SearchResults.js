import React from "react";
import styles from "./SearchResults.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Chat from '../Chat';
const axios = require("axios");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));
class SearchResults extends React.Component {
  state = {
    data: [],
    title: "",
    favorite: true
  };

  handleConfidenceClick = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA&q=confidence&limit=25&offset=0&rating=PG&lang=en"
    );
    this.setState({ data: data.data });
    this.setState({ title: "Confidence Boost" });
    console.log(data);
    return this.state.handleConfidenceClick;
  };

  handleLoveClick = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA&q=selflove&limit=25&offset=0&rating=PG&lang=en"
    );
    this.setState({ data: data.data });
    this.setState({ title: "Love" });
    console.log(data);
    return this.state.handleLoveClick;
  };

  handleMakeMeSmileClick = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA&q=funny&limit=25&offset=0&rating=PG&lang=en"
    );
    this.setState({ data: "" });
    this.setState({ data: data.data });
    this.setState({ title: "Make Me Smile" });
    console.log(data);
    return this.state.handleMakeMeSmile;
  };

  render() {
    // const { data } = this.state;
    return (
      <div>
        {this.state.title === "" ? (
          <p> Choose a Category </p>
        ) : (
          <p>{this.state.title}</p>
        )}
        <div className={styles.searchResults}>
          <button
            id="confidence-booster"
            name="Confidence Booster"
            type="submit"
            onClick={
              this.handleConfidenceClick === !this.handleConfidenceClick
                ? false
                : this.handleConfidenceClick
            }
          >
            Confidence Booster
          </button>
          <button type="submit" onClick={this.handleMakeMeSmileClick}>
            Make me Smile/Laugh
          </button>
          <button type="submit" onClick={this.handleLoveClick}>
            Love
          </button>
          <Chat />
          {/* {data.map((gif, index) => {
            return (
              <div className={styles.gif} key={index}>
                <video controls loop autoPlay>
                  <source
                    src={gif.images.downsized_small.mp4}
                    type="video/mp4"
                  />
                </video>
                {/* <button onClick={this.handleFavoritesClick} type="submit">
                  Add to Favorites
                </button> */}{" "}
          {/* </div> */}
          {/* ); */}
          {/* })} */}
        </div>

        <div className={useStyles.roots}>
          <GridList cellHeight={160} className={useStyles.gridList} cols={3}>
            {this.state.data.map((gif, index) => (
              <GridListTile key={index} cols={1}>
                <video controls loop autoPlay>
                  <source
                    src={gif.images.downsized_small.mp4}
                    type="video/mp4"
                  />
                </video>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default SearchResults;
