import React, { useState } from 'react';
import '../App.css';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HomePageGymSearch from './HomePageGymSearch';
import HomePagePtSearch from './HomePagePtSearch';
import Typography from '@mui/material/Typography';



const useStyles = makeStyles((theme) => ({
  innerHomeSearchBar: {
    width: "65%",
    margin: "0 auto",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
    },
    
  }
}));

const HomeSearchBar = () => {
  const classes = useStyles();
  const [searchTypeValue, setValue] = useState('gym');

  const renderForm = (type, isDetailed) => {
    if(type === 'gym') {
      return <HomePageGymSearch />
    }
    if(type === 'trainer') {
      return <HomePagePtSearch />
    }
  }

  const handleChangeSearchChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <div className={classes.outterHomeSearchBar}>
      <div  className={`${classes.innerHomeSearchBar} shadow`}>
        <Typography style={{ textAlign: "center", paddingBottom: 30}} variant="h4" fontFamily="titilliumBlack">
          Begin your journey with <u>Tesi</u>
        </Typography>
        <FormControl size="small" fullWidth component="fieldset">
          <div style={{ position: "relative", textAlign: "center" }}>
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Grid item>
                <FormLabel color="secondary" component="legend">Keresés a következőre:</FormLabel>
              </Grid>
              <Grid item >
                <RadioGroup row aria-label="searchSelector" name="searchSelector" value={searchTypeValue} onChange={handleChangeSearchChange}>
                  <FormControlLabel value="gym" control={<Radio />} label="Terem" />
                  <FormControlLabel value="trainer" control={<Radio />} label="Edző" />
                </RadioGroup>
              </Grid> 
            </Grid>
          </div>
        </FormControl>
        <Grid container justify="center" alignContent="center" alignItems="center" spacing={2}>
          {renderForm(searchTypeValue)}
        </Grid>
        <Typography style={{ paddingTop: 15, textAlign: "center", color: "#797979" }} variant="body2" display="block" gutterBottom>
          Keresd az egyes specializációk és létesítmények leírását <a href="asd">itt</a>
        </Typography>
      </div>

    </div>
  )
}

export default HomeSearchBar;

