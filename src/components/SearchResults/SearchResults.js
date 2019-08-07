import React from "react";
import styles from "./SearchResults.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Chat from "../Chat";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const axios = require("axios");

const images = [
  {
    url: "/Images/Confidence.jpg",
    title: "Confidence Booster",
    width: "33%",
    height: "77rem"
  },
  {
    url:
      "https://static1.squarespace.com/static/59493805e3df28125bbc1edb/t/59c4260246c3c4e076d46bf8/1506027016039/Ridiculous+Love+DS.jpg",
    title: "Love",
    width: "33%",
    height: "77vh"
  },
  {
    url: "./Images/Laugh.jpg",
    title: "Make Me Smile/Laugh",
    width: "33%",
    height: "77vh"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  root2: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  gridList: {
    width: 500,
    height: 450
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
  
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
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
    this.setState({ data: data.data });
    this.setState({ title: "Make Me Smile" });
    console.log(data);
    return this.state.handleMakeMeSmile;
  };

  render() {
    // const { data } = this.state;
    return (
      <div className="mainpage">
        <div>
          {this.state.title === "" ? (
            <h1 stlye={{color: "white"}}> Choose a Category </h1>
          ) : (
            <p>{this.state.title}</p>
          )}

          <ButtonBase
            focusRipple
            className={useStyles.image}
            focusVisibleClassName={useStyles.focusVisible}
            style={{
              width: "32vw",
              height: "55vh",
              backgroundImage: "url('/Images/Confidence.jpg')",
              backgroundSize: "100% 100%",
            }}
            onClick={this.handleConfidenceClick}
          >
            <span
              className={useStyles.imageSrc}
              style={{
                backgroundImage: "url('/Images/Confidence.jpg')"
                // color: "white",
                // fontSize: "18em"
              }}
            />
            <span className={useStyles.imageBackdrop} />
            <span className={useStyles.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="white"
                className={useStyles.imageTitle}
              >
                Confidence Booster
                <span className={useStyles.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>

          <ButtonBase
            focusRipple
            className={useStyles.image}
            focusVisibleClassName={useStyles.focusVisible}
            style={{
              width: "32vw",
              height: "55vh",
              backgroundImage: "url('/Images/Love.jpg')",
              backgroundSize: "100% 100%"
            }}
            onClick={this.handleLoveClick}
          >
            <span
              className={useStyles.imageSrc}
              style={{
                backgroundImage: 'url("/Images/Love.jpg")'
              }}
            />
            <span className={useStyles.imageBackdrop} />
            <span className={useStyles.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="white"
                className={useStyles.imageTitle}
              >
                Love
                <span className={useStyles.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
          <ButtonBase
            focusRipple
            className={useStyles.image}
            focusVisibleClassName={useStyles.focusVisible}
            style={{
              width: "32vw",
              height: "55vh",
              backgroundImage: 'url("/Images/Laugh.jpg")',
              backgroundSize: "100% 100%"
            }}
            onClick={this.handleMakeMeSmileClick}
          >
            <span
              className={useStyles.imageSrc}
              style={{
                backgroundImage: 'url("/Images/Laugh.jpg")'
              }}
            />
            <span className={useStyles.imageBackdrop} />
            <span className={useStyles.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="white"
                className={useStyles.imageTitle}
              >
                Make Me Laugh
                <span className={useStyles.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </div>

        <div className={useStyles.root}>
          <GridList cellHeight={160} className={useStyles.gridList} cols={5}>
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
