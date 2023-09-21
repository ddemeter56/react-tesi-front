import React, { useState, useContext } from 'react';
import AuthContext from '../context/auth.context';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SideBar from './page-content/navigation-page/SideBar';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { redirectToLogout, redirectToLogin } from '../utils/auth';
import PersonIcon from '@mui/icons-material/Person';
import LogInDialog from './commons/dialog/LogInDialog';

import Badge from '@mui/material/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: '12px',
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontSize: "2rem",
    color: "rgb(45, 55, 72)"
  },
  toolbar: {
    [theme.breakpoints.up('md')] : {
      width: "60%",
      margin: "0px auto"
    }
  }
}));


export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const [ isLogInDialogOpen, setIsLogInDialogOpen ] = useState(false);

  const handleLogInDialogOpen = () => {
    setIsLogInDialogOpen(true);
  };

  const handleLogInDialogClose = () => {
    setIsLogInDialogOpen(false);
  };
  console.log(userDetails);

  const redirectToAdminPage = () => {
    history.push(`/admin`);
  }
  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: "white", position:"fixed"}}>
        <Toolbar className={classes.toolbar}>
          <SideBar />
          <Link className={classes.title} to="/">
            TESI
          </Link>
          { userDetails.isLoggedIn ?
            <>
              <IconButton>
                <Badge  color="secondary" variant="dot" invisible={false}>
                  <NotificationsActiveIcon />
                </Badge >
              </IconButton>
              <IconButton onClick={redirectToAdminPage}>
                <PersonIcon />
              </IconButton>
              <IconButton onClick={() => redirectToLogout(setUserDetails)}>
                <ExitToAppIcon />
              </IconButton>
            </>
            :
            <Button onClick={handleLogInDialogOpen}>
              {t("login")}
            </Button>
          }
        </Toolbar>
      </AppBar>
      <LogInDialog 
        open={isLogInDialogOpen}
        onClose={handleLogInDialogClose}
        title="Bejelentkezés"
        actions={<Button onClick={handleLogInDialogClose}>Close</Button>}
      />
    </div>
  );
}