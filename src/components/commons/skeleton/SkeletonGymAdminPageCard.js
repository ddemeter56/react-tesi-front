import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Box } from '@mui/material';
import Skeleton from '@mui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    margin: "15px",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mediaContainer: {
    width: '30%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '200px',
    },
  },
  imgContainer: {
    paddingBottom: "60%",
    background:"#EEE",
    height:0,
    position:"relative",
    marginBottom: 15,
  },
  media: {
    width:"100%",
    height:"100%",
    display:"block",
    position:"absolute",
  },
  mediaButton: {
    position: 'absolute',
    bottom: 7,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '0.8rem',
    padding: '3px 8px',
  },
  content: {
    width: '70%',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginTop: 30,
    },
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      display: 'block',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  editButton: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      float: 'right',
    }
  },
}));

const SkeletonGymAdminPageCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.mediaContainer}>
        <div className={classes.imgContainer}>
        </div>
        <Skeleton animation="wave" height={55} width={90} className={classes.mediaButton}/>
      </Box>
      <CardContent className={classes.content}>
        <Box className={classes.editButton}>
          <Skeleton animation="wave" style={{ margin: 5 }} height={30} width={30} />
        </Box>
        <Skeleton animation="wave" style={{marginTop: 25}} className={classes.description} width="50%"/>   
        <Skeleton animation="wave" style={{marginTop: 20}} className={classes.description} />   
        <Skeleton animation="wave" style={{marginTop: 5}} className={classes.description} />  
        <Skeleton animation="wave" style={{marginTop: 5}} className={classes.description} />    
        <div className={classes.buttonContainer}>
          <Skeleton animation="wave" style={{ margin: 5 }} height={55} width={90} />
          <Skeleton animation="wave" style={{ margin: 5 }} height={55} width={90} />

        </div>
      </CardContent>
    </Card>
  );
};

export { SkeletonGymAdminPageCard };
