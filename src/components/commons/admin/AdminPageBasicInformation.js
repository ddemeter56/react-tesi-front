import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  adminPageBasicInformation: {
    textAlign: "center",
    position: "relative",
    paddingBottom: 25
  },
  admingPagePicture: {
    display: "block",
    maxWidth: 270,
    maxHeight: 270,
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
    width: "auto",
    height: "auto",
    padding: "10px 15px 10px 15px", 
  }
}));

const AdminPageBasicInformation = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.adminPageBasicInformation}>
      <Typography variant="h4">Modify basic information</Typography>
      <Grid container justifyContent="flex-start" alignContent="center" alignItems="center">
      
        <img className={classes.admingPagePicture} alt="profile_pic" src="https://www.thetrainingroom.com/getattachment/4b7d4ad6-7b4f-4611-9631-ab299fafda05/Personal-Trainer-Motivation-01.jpgaspx" />
      
        <Grid item sm={6}>
          <Typography variant="subtitle1" fontFamily="titilliumLight">Modify your informations like images, specializations, certifications</Typography>
        </Grid>
      </Grid>
      <div style={{ position: "absolute", right: 0, bottom: 0, paddingTop: 15}}>
        <Button variant="text">
        Modify
        </Button>
      </div>
    </Paper>
  )
};

export default AdminPageBasicInformation;
