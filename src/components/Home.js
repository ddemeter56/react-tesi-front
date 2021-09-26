import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import HomeSearchBar from './HomeSearchBar';
import { makeStyles } from '@mui/styles';
import LandingSpeech from './LandingSpeech';
import HomePagePricing from './HomePagePricing';
import FlowSection from './FlowSection';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import img from '../media/runner.png';
import "../App.css";

const floatingButtons = [
  { label: "label", onClick: () => {}}
];

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
    [theme.breakpoints.between('xs', 'sm')]: {
      clipPath: 'none'
    },
    clipPath: "polygon(0% 15%, 0 0, 17% 18%, 48% 0, 100% 0, 100% 15%, 100% 79%, 100% 100%, 79% 100%, 19% 88%, 0 100%, 0% 85%)"

  },
  topSectionImg: {
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none'
    },
  },
  flowSection: {
    height: "90vh",
    minHeight: 750,
    paddingTop: 60,
  },
  midSection: {
    paddingTop: 50
  }
}));

const Home = () => {
  const classes = useStyles();
  const searchRef = useRef(null);
  const scrollToSearch = () => {
    window.scrollTo({ behavior: 'smooth', top: searchRef.current.offsetTop })
  };

  return(
    <div className={`${classes.container} `}>
      <div className={`${classes.topSection} background-fancy`}>
        <Grid 
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Grid item xl={6} lg={6} md={6} sm={6}>
            <img className={classes.topSectionImg} src={img} alt="img" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} >
            <LandingSpeech onSearchClick={scrollToSearch} />
          </Grid>
        </Grid>
      </div>
      {}
      <div ref={searchRef} className={classes.flowSection}>
        <Typography style={{ textAlign: "center", paddingBottom: 25}} variant="h4" fontFamily="titilliumBlack">
          Begin your journey with <u>Tesi</u>
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ boxSizing: "border-box"}}>
          <Grid item xl={6}>  
            <HomeSearchBar />
          </Grid>
          <Grid item xl={6}>  
            <FlowSection />
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className={classes.midSection}>
        <HomePagePricing />
      </div>
    </div>
  )
}

export default Home;