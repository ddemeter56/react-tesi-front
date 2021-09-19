import Skeleton from '@mui/lab/Skeleton';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '12px',
    marginBottom: '12px',
    margin: 'auto',
    [theme.breakpoints.between('xs','sm')]: { 
      minWidth: 350,
      maxWidth: "100%",
      height: 180,
    },
    [theme.breakpoints.between('md','xl')]: { 
      width: 400,
      height: 180,
    },
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const SkeletonCard = (key) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justify="space-evenly"
          style={{ textAlign: "center" }}  >
          <Grid item xs={6}> 
            <Skeleton animation="wave" variant="rect" style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'}} className={classes.image}/>
            <Skeleton animation="wave" style={{marginLeft: "25%", marginTop: 5}} height={15} width="50%" />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Skeleton animation="wave" height={30} style={{marginLeft: "15%"}} width="65%" />
                <Skeleton animation="wave" height={20} style={{marginLeft: "15%"}} width="65%" />
                <Skeleton animation="wave" height={15} width="100%" />
                <Skeleton animation="wave" height={15} width="100%" />
                <Skeleton animation="wave" height={15} width="100%" />
                <Skeleton animation="wave" height={15} width="100%" />
                <Skeleton animation="wave" height={15} width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justify="flex-start"
          style={{ textAlign: "center", paddingLeft: 35 }}  >
          {[1,2,3,4,5].map((item, index) => {
            return (
              <Skeleton key={index} animation="wave" style={{margin: 5}} height={30} width={30} />
            )
          })}
        </Grid>
      </Paper>
    </div>
  );
}

export default SkeletonCard;