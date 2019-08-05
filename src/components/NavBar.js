
  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import ClickAwayListener from '@material-ui/core/ClickAwayListener';
  import Button from '@material-ui/core/Button';
  import Paper from '@material-ui/core/Paper';
  import { teal } from '@material-ui/core/colors';
  import { lightBlue} from '@material-ui/core/colors';
  import {amber} from '@material-ui/core/colors';
  import {yellow} from '@material-ui/core/colors';
  import NewUser from './NewUser';
  import Contact from './Contact';
  import {deepOrange} from '@material-ui/core/colors';

  const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
       // #E040FB
    },
    paper: {
      backgroundColor: amber[400],
      secondary:  deepOrange.A400,

      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
    },
    fake: {

      backgroundColor: yellow[200], //#ef5350

      height: theme.spacing(1),
      margin: theme.spacing(2),
      // Selects every two elements among any group of siblings.
      '&:nth-child(2n)': {
        marginRight: theme.spacing(3),
      },
    },
  }));

  export default function ClickAway() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
      setOpen(prev => !prev);
    };

    const handleClickAway = () => {
      setOpen(false);
    };

    const fake = <div className={classes.fake} />;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Button onClick={handleClick}>Open menu</Button>

            {open ? (
              <Paper className={classes.paper}>
                 {fake}<a href="/newuser">New User</a>
               {fake}<a href="/main">Visual Therapy</a>
             {fake}<a href="/music">Phono Therapy</a>
           {fake}<a href="/contact">Contact Us</a>
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
