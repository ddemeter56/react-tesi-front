import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarItems from './SideBarItems';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: "rgb(45, 55, 72)"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <SideBarItems anchor />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}