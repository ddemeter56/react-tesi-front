import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import "../App.css";

const useStyles = makeStyles((theme) => ({
  landingPageSpeech: {
    width: "75%",
    texAlign: "center",
    float: "left",
    animation: "1s ease-out 0s 1 slideInFromRight",  
    paddingTop: "20%",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
      textAlign: "center"
    },
  },
  buttonFirst: {
    width: "100%"
  },
  buttonSecond: {
    width: "100%"
  }
}));

const LandingSpeech = () => {
  const classes = useStyles();
  return (
    <div className={classes.landingPageSpeech}>
      <Typography variant="h1" className={`typography`}>
        Tesi
      </Typography>
      <Typography variant="h2">
        A mozgás közössége
      </Typography>
      <Divider />
      <Typography display="inline" variant="h5" color="textSecondary">
        <u>Találj</u> edzőt, vagy termet. <u>Foglalj</u> időpontot. <u>Kövesd a változást</u>. 
      </Typography>
      <Typography variant="h6" color="textSecondary">
        <i>Ha pedig <strong>edző</strong> vagy, vagy termed van</i>
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Kezeld vendégeid edzéstervét egy helyen, osszd meg a szabad időpontjad és <strong>szerezz új vendégeket!</strong> 
      </Typography>
      
      <Grid container direction="row" spacing={3} style={{paddingTop: 15}}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Button variant="contained" className={classes.buttonFirst}>
            <Typography variant="h5" className={`typography`}>
              Keresés
            </Typography>
          </Button>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Button variant="outlined" className={classes.buttonSecond}> 
            <Typography variant="h5" className={`typography`}>
              részletek
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default LandingSpeech;