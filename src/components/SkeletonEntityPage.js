import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    paddingTop: 70,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  }
}));

const SkeletonEntityPage = () => {
  const classes = useStyles();
  return (
    <Grid container
      className={classes.container}
      spacing={0}
      direction="row"
      alignItems="center"
      alignContent="center"
      justify="space-around"
      style={{ textAlign: "center" }}>
      
      <Grid item 
        container
        justify="center"
        direction="column" 
        alignItems="center" 
        alignContent="center" 
        style={{ padding: 30}}>
        <Skeleton animation="wave" height={50} width={"60%"} />  
        <Skeleton animation="wave" height={40} width={"40%"} />
        <Skeleton animation="wave" height={25} width={"40%"} />
      </Grid>
      <Divider/>
      <Grid item container
        justify="center"
        direction="column" 
        alignItems="center" 
        alignContent="center" >
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
        <Skeleton animation="wave" height={15} width={"80%"} />  
      </Grid>
      <Grid item container
        justify="center"
        direction="row" 
        alignItems="center" 
        alignContent="center"
        style={{paddingTop: 40}}>
        <Grid item container
          justify="center"
          direction="column" 
          alignItems="center" 
          alignContent="center"
          xl={6}>

          <Skeleton animation="wave" height={30} width={"70%"} />
          <Skeleton animation="wave" height={30} width={"70%"} />  
          <Skeleton animation="wave" height={30} width={"70%"} />  
          <Skeleton animation="wave" height={30} width={"70%"} />  
          <Skeleton animation="wave" height={30} width={"70%"} />    
          <Skeleton animation="wave" height={30} width={"70%"} />  
        </Grid>
        <Grid item container
          justify="center"
          direction="row" 
          alignItems="center" 
          alignContent="center"
          xl={6}>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
          <Skeleton animation="wave" height={30} width={40} style={{ marginRight: 20}}/>
        </Grid>
      </Grid>
      <Grid item container
        justify="center"
        direction="row" 
        alignItems="center" 
        alignContent="center">
        <Skeleton animation="wave" height={400} width={"80%"} />
      </Grid>
      <Grid item container
        justify="center"
        direction="row" 
        alignItems="center" 
        alignContent="center">
        <Skeleton animation="wave" height={400} width={"80%"} />
      </Grid>
    </Grid>
  )
}

export default SkeletonEntityPage;