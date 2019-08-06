
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
  import {blueGrey} from '@material-ui/core/colors';
  import {indigo} from '@material-ui/core/colors';
  import {deepPurple} from '@material-ui/core/colors';
  import {grey} from '@material-ui/core/colors';
  import { sizing } from '@material-ui/system';
  import {blue} from '@material-ui/core/colors';



  const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
       // #E040FB
    },
    paper: {
      backgroundColor: grey[300], //#ef5350
      position: 'absolute',
      top: 30,
      right: 0,
      left: 0,

    },
    fake: {
      // backgroundColor: grey[100],
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
      <div className={classes.root} id="NavBar" >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Button id="openbutt" onClick={handleClick}>Menu</Button>

            {open ? (
              <Paper className={classes.paper}>
                 {fake}<a href="/newuser">New User</a>
                 {fake}<a href="/main">Visual Therapy</a>
                 {fake}<a href="/music">Phono Therapy</a>
                 {fake}<a href="/contact">Contact Us</a>
                 {fake}<a href="/tipscomponent">Health Tips</a>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
