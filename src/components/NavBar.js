import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { teal } from "@material-ui/core/colors";
import { lightBlue } from "@material-ui/core/colors";
import { amber } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import NewUser from "./NewUser";
import Contact from "./Contact";
import { deepOrange } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";
import { indigo } from "@material-ui/core/colors";
import { deepPurple } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
    // #E040FB
  },
  paper: {
    backgroundColor: grey[100], //#ef5350
    position: "absolute",
    top: 36,
    right: 0,
    left: 0
  },
  fake: {
    backgroundColor: grey[100],
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
        <div>
          <Button id="openbutt" onClick={handleClick}>
            Open menu
          </Button>

          {open ? (
            <Paper className={useStyles.paper}>
              {fake}
              <a href="/newuser">Home</a>
              {fake}
              <a href="/main">Categories</a>
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

//
//
//
//
//
//     export default function SimpleMenu() {
//          const [anchorEl, setAnchorEl] = React.useState(null);
//
//          function handleClick(event) {
//            setAnchorEl(event.currentTarget);
//          }
//
//          function handleClose() {
//            setAnchorEl(null);
//          }
//
//          return (
//            <div>
//              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
//                Open Menu
//              </Button>
//              <Menu
//                id="simple-menu"
//                anchorEl={anchorEl}
//                keepMounted
//                open={Boolean(anchorEl)}
//                onClose={handleClose}
//                ></Menu>
//
//
//
//                <MenuItem onClick={handleClose} >Sign Up</MenuItem>
//                <MenuItem onClick={handleClose} >Contact Us</MenuItem>
//                <MenuItem onClick={handleClose} >Sign In</MenuItem>
//                <MenuItem onClick={handleClose} >Image Therapy</MenuItem>
//               <MenuItem onClick={handleClose} >Music Therapy</MenuItem>
//            </div>
//
// );
//         }
