import Grid from '@mui/material/Grid';
import HomeSearchBar from './HomeSearchBar';
import { makeStyles } from '@mui/styles';
import LandingSpeech from './LandingSpeech';
import HomePagePricing from './HomePagePricing';
import FlowSection from './FlowSection';
import Divider from '@mui/material/Divider';
import gif2 from '../media/gif2.gif';
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
    height: "100vh",
    minHeight: 750,
    clipPath: "polygon(0 0, 32% 20%, 60% 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 60% 100%, 32% 80%, 0 100%, 0 49%)"
  },
  midSection: {
    paddingTop: 50
  }
}));

const Home = () => {
  const classes = useStyles();
  return(
    <div className={`${classes.container} `}>
      <div className={`${classes.topSection} background-fancy`}>
        <Grid 
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Grid item xl={6} lg={6} md={6} sm={6}>
            <img src={img} alt="img" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <LandingSpeech />
          </Grid>
        </Grid>
      </div>
      {}
      <div className={classes.flowSection}>
        <FlowSection />
      </div>
      <Divider />
      <div className={classes.midSection}>
        <HomePagePricing />
      </div>
    </div>
  )
}

export default Home;