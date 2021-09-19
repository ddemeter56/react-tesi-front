import Grid from '@mui/material/Grid';
import HomeSearchBar from './HomeSearchBar';
import { makeStyles } from '@mui/styles';
import LandingSpeech from './LandingSpeech';
import HomePagePricing from './HomePagePricing';
import FlowSection from './FlowSection';
import Divider from '@mui/material/Divider';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "20px",
    boxSizing: "content-box",
    [theme.breakpoints.up('sm')] : {
      width: "80%",
      margin: "0px auto"
    },
    [theme.breakpoints.up('lg')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  topSection: {
    paddingBottom: '36px'
  },
  midSection: {
    paddingTop: 50
  }
}));

const Home = () => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <div className={classes.topSection}>
        <Grid 
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
          style={{ minHeight: 460}}>
          <Grid item xl={6} style={{ minHeight: 460, textAlign: "center", padding: "55px 0px", boxSizing: "content-box"}}>
            <LandingSpeech />
          </Grid>
          <Grid item xl={6} style={{ minHeight: 460 }}>
            <HomeSearchBar />
          </Grid>  
        </Grid>
      </div>
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