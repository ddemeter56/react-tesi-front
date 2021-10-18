import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';

import LandingSpeech from './page-content/landing-page/LandingSpeech';
import LandingSearchBar from './page-content/landing-page/LandingSearchBar';
import LandingPagePricing from './page-content/landing-page/LandingPagePricing';
import LandingDetailedCards from './page-content/landing-page/LandingDetailedCards.js';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import runnerImg from '../media/runner.png';
import searchImg from '../media/homepage-search.png'

import "../App.css";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "20px",
    boxSizing: "content-box",
  },
  topSection: {
    paddingBottom: '36px',
    paddingTop: "35px",
    height: "95vh",
    minHeight: 750,
    maxHeight: 800,
    [theme.breakpoints.between('xs', 'sm')]: {
      clipPath: 'none'
    },
    clipPath: "polygon(0% 15%, 0 0, 17% 18%, 48% 0, 100% 0, 100% 15%, 100% 79%, 100% 100%, 79% 100%, 19% 88%, 0 100%, 0% 85%)"

  },

  topSectionImgContainer: {
    width: "100%", 
    [theme.breakpoints.only('sm')]: {
      paddingTop: "55%"
    },
    
    [theme.breakpoints.only('md')]: {
      paddingTop: "35%"
    },

    animation: "2s ease-out 0s 1 slideInFromLeft"
  },
  topSectionImg: {
    width: "100%",
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none'
    },
  },
  searchSection: {
    height: "90vh",
    minHeight: 1000,
    maxHeight: 1000,
    [theme.breakpoints.between('md', 'xl')]: {
      paddingTop: "5%",
    },
    [theme.breakpoints.between('xs', 'lg')] : {
      paddingTop: "15%"
    },
    [theme.breakpoints.between('xs','sm')]: {
      clipPath: 'none',
      borderTop: "2px solid #c3c3c3"
    },
    clipPath: "polygon(50% 0, 80% 10%, 100% 25%, 97% 73%, 80% 90%, 50% 100%, 20% 90%, 3% 70%, 0 35%, 14% 6%)"
  },

  searchSectionImg: {
    width: "100%",
    [theme.breakpoints.between('xs', 'xl')]: {
      display: 'none'
    },
  },

  descriptionCards: {
    minHeight: 550,
    paddingTop: 35, 
    [theme.breakpoints.between('xs', 'sm')] : {
      borderTop: "2px solid #c3c3c3"
    }
  },

  midSection: {
  }
}));

const Home = () => {
  const classes = useStyles();
  const searchRef = useRef(null);
  const descriptionRef = useRef(null);

  const scrollToSearch = () => {
    window.scrollTo({ behavior: 'smooth', top: searchRef.current.offsetTop })
  };

  const scrollToDescriptionCards = () => {
    window.scrollTo({ behavior: 'smooth', top: descriptionRef.current.offsetTop })
  };

  return(
    <div className={`${classes.container}`}>
      <div className={`${classes.topSection} background-fancy`}>
        <Grid 
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Grid item xl={6} lg={6} md={6} sm={6}>
            <div className={classes.topSectionImgContainer}>
              <img className={classes.topSectionImg} src={runnerImg} alt="img" />
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} >
            <LandingSpeech onSearchClick={scrollToSearch} onDetailsClick={scrollToDescriptionCards} />
          </Grid>
        </Grid>
      </div>
      <div ref={searchRef} className={`${classes.searchSection} background-fancy`}>
        <Typography variant="h3" style={{ paddingTop: "2%", textAlign: "center"}}><strong>Keress előfizetőink között!</strong></Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ boxSizing: "border-box"}}>
          <Grid item xl={6}>  
            <LandingSearchBar />
          </Grid>
          <Grid item xl={6}>  
            <img className={classes.searchSectionImg} src={searchImg} alt="search" />
          </Grid>
        </Grid>
      </div>
      <div ref={descriptionRef} className={`${classes.descriptionCards} `}>
        <Grid container justifyContent="center">
          <Typography variant="h3" style={{ textAlign: "center" }}>Szakember vagy? <br /><strong>Válaszd a Tesi-t!</strong></Typography>
          <LandingDetailedCards />
        </Grid>
      </div>
      <Divider />
      <div className={classes.midSection}>
        <LandingPagePricing />
      </div>
    </div>
  )
}

export default Home;