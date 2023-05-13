import React from 'react';
import { makeStyles } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBarItems from './SideBarItems';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: "black"
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

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

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
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            disableBackdropTransition={!isIOS}
            disableDiscovery={isIOS}>
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
