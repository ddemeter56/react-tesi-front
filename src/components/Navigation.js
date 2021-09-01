import React, { useContext } from 'react';
import AuthContext from '../context/auth.context';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { redirectoToLogout, redirectToLogin } from '../utils/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontSize: "2rem",
    color: "rgb(45, 55, 72)"
  },
  toolbar: {
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  }
}));


export default function Navigation() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { userDetails, setUserDetails } = useContext(AuthContext);
  
  console.log(userDetails);
  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: "white", position:"fixed"}}>
        <Toolbar className={classes.toolbar}>
          <SideBar />
          <Link className={classes.title} to="/">
            TESI
          </Link>
          <LanguageSelector />
          { userDetails.isLoggedIn ?
            <IconButton onClick={redirectoToLogout}>
              <ExitToAppIcon />
            </IconButton>
            :
            <Button onClick={redirectToLogin}>
              {t("login")}
            </Button>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}