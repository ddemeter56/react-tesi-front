import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

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


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white"}}>
        <Toolbar className={classes.toolbar}>
          <SideBar />
          <Link className={classes.title} to="/">
            TESI
          </Link>
          <LanguageSelector />
          <Button color="rgb(45, 55, 72)">{t("login")}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}