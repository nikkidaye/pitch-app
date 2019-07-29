import React from "react";
import styles from "./SearchResults.module.css";

const axios = require("axios");

class SearchResults extends React.Component {
  state = {
    data: []
  };

  handleClick = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=duywYDviRp03Bk2OT6ZrkE0Ccl3ODlUA&q=confidence&limit=25&offset=0&rating=PG&lang=en"
    );
    this.setState({ data: data.data });
    console.log(data);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1 onClick={this.handleClick}>Confidence Booster</h1>
        <div className={styles.searchResults}>
          {data.map(gif => {
            return (
              <div className={styles.gif}>
                <video controls loop autoPlay>
                  <source
                    src={gif.images.downsized_small.mp4}
                    type="video/mp4"
                  />
                </video>
                <button>Add to Favorites</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResults;
