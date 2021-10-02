import React, { useState, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
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

import '../App.css';


const useStyles = makeStyles((theme) => ({
  innerHomeSearchBar: {
    width: "65%",
    margin: "0 auto",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
    },
    [theme.breakpoints.up('sm')]: {
      boxShadow: "0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 8px 8px rgb(0 0 0 / 11%), 0 16px 16px rgb(0 0 0 / 11%), 0 32px 32px rgb(0 0 0 / 11%)"
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: "15%",
    },
    borderRadius: 5,
    opacity: 0
  },
  hideinnerHomeSearchBar: {
    display: "none"
  }
}));

const HomeSearchBar = () => {
  const classes = useStyles();
  const [searchTypeValue, setValue] = useState('gym');

  const outterRef = useRef();
  const isVisible = useOnScreen(outterRef)


  const renderForm = (type) => {
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
    <div className={`${classes.outterHomeSearchBar} `}>
      <div  ref={outterRef} className={`${classes.innerHomeSearchBar} ${isVisible && 'animated animatedFadeInUp fadeInUp'} `}>
        <Typography style={{ textAlign: "center", paddingBottom: 30}} variant="h4">
          Próbáld ki a <u>Tesit</u>
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

