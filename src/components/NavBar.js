import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles(theme => ({
  root: {
    position: "inherit",
    backgroundColor: "transparent",
    // #E040FB
  },
  paper: {
    backgroundColor: "transparent",
    position: "inherit",
    top: 36,
    right: 0,
    left: 0
  },
  fake: {
    backgroundColor: "transparent",
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    "&:nth-child(2n)": {
      marginRight: theme.spacing(3)
    }
  }


}));

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div className={useStyles.fake} />;

  return (
    <div className={useStyles.root} id="NavBar">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="opennav">
          <Button id="openbutt" onClick={handleClick}>
            Menu
          </Button>
          {open ? (
            <Paper className={useStyles.paper}>
              {fake}
              <a href="/">Home</a>
              {fake}
              <a href="/newuser">Become a Member</a>
              {fake}
              <a href="/main">Visual Therapy</a>
              {fake}
              <a href="/chat">Live Therapy Session</a>
              {fake}
              <a href="/contact">Contact Us</a>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}

