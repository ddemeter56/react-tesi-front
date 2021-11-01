import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchBox from '../search/SearchBox';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: "15px 15px 0px 15px"
  },
}));

const DashboardHeader = ({ type, isRegistered }) => {
  const classes = useStyles();
  const history = useHistory();

  console.log(type);
  const redirectToRegisterPage = () => {
    let registerPage;
    // if(type === 'personal_trainer') {
    //   registerPage = 'trainer';
    // }
    //if (type === 'owner') {
    registerPage = 'gym';
    //}
    history.push(`/register/${registerPage}`);
  };
  return (
    <Grid container justifyContent="space-between" className={`${classes.headerContainer} `}>
      <Grid item>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item>
        <SearchBox />
      </Grid>
      <Grid item>
        { isRegistered ? 
          <Button variant="outlined">Modify profile</Button> 
          : 
          <Button variant="outlined" className={`pulse`} onClick={redirectToRegisterPage}>Make your first register</Button>
        }
      </Grid>
    </Grid>
  );
}

export default DashboardHeader; 