import Grid from '@material-ui/core/Grid';
import HomeSearchBar from './HomeSearchBar';
import { makeStyles } from '@material-ui/core/styles';
import LandingSpeech from './LandingSpeech';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.12);",
  }
}));

const Home = () => {

  const classes = useStyles();

  return(
    <div className={classes.container}>
      <Grid 
        container
        direction="row-reverse"
        justify="center"
        alignItems="center">
        <Grid item xl={6} alignItems="flex-start">
          <LandingSpeech />
        </Grid>
        <Grid item xl={6}>
          <HomeSearchBar />
        </Grid>  
      </Grid>
    </div>
  )
}

export default Home;