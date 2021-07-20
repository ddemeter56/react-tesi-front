import Grid from '@material-ui/core/Grid';
import HomeSearchBar from './HomeSearchBar';
import { makeStyles } from '@material-ui/core/styles';
import LandingSpeech from './LandingSpeech';
import HomePagePricing from './HomePagePricing';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  topSection: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  midSection: {
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
          alignItems="center">
          <Grid item xl={6}>
            <LandingSpeech />
          </Grid>
          <Grid item xl={6}>
            <HomeSearchBar />
          </Grid>  
        </Grid>
        <Divider />
      </div>
      <div className={classes.midSection}>
        <HomePagePricing />
      </div>
    </div>
  )
}

export default Home;