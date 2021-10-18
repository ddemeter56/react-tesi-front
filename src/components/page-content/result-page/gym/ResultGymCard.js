import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WebIcon from '@mui/icons-material/Web';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '12px',
    marginBottom: '12px',
    margin: 'auto',
    [theme.breakpoints.between('xs','md')]: { 
      minWidth: 280,
      maxWidth: "100%",
      height: 200,
    },
    [theme.breakpoints.up('md')]: { 
      width: 400,
      height: 230,
    },
    [theme.breakpoints.only('xl')]: {
      width: 600,
      height: 200
    }
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
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 4,
    wordBreak: "break-all",
    overflow: "hidden"
  },
  socialMedia: {

  },
  address: {
    padding: 0,
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden"
  }
}));

const ResultGymCard = ({ props }) => {
  const classes = useStyles();
  const history = useHistory();

  // Display these variables from props
  const { name, addressString, shortDescription, earliestOpening, latestClosing, referenceCode } = props;
  const { facebookUserId, instagramUserId, twitterUserId, youtubeUserId, webPageUserId} = props;
  const { images } = props;

  let firstImageUrl = '';
  if(Array.isArray(images) && images.length > 0) {
    firstImageUrl = images[0].publicAddress;
  }

  const socialMediaArray = [
    {id: facebookUserId, key: "facebook", icon: <FacebookIcon/>, url: `www.facebook.com/${facebookUserId}`},
    {id: instagramUserId, key: "instagram", icon: <InstagramIcon />, url: `www.instagram.com/${instagramUserId}`},
    {id: twitterUserId, key:"twitter", icon: <TwitterIcon />, url: `www.twitter.com/${twitterUserId}`}, 
    {id: youtubeUserId, key:"youtube", icon: <YouTubeIcon />, url: `www.youtube.com/${youtubeUserId}`}, 
    {id: webPageUserId, key:"webpage", icon: <WebIcon />}
  ];

  function redirectToGym() {
    console.log(`redirect to gym ${referenceCode}`);
    history.push(`/${referenceCode}`);
  }


  console.log(socialMediaArray);
  return (
    <div className={classes.root}>
      <Paper className={`${classes.paper} background-fancy`}>
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          style={{ textAlign: "center" }}  >
          <Grid item xs={6} style={{ paddingTop: 0, borderRight: "1px solid #c3c3c3"}}> 
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={`https://api.tesi.life${firstImageUrl}`} />
            </ButtonBase>
            <Typography variant="caption">
              <br /> { earliestOpening } - { latestClosing }
            </Typography>
          </Grid>
          <Grid style={{ paddingTop: 20 }} item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography style={{ cursor: "pointer" }} gutterBottom variant="subtitle1" fontFamily="titilliumBlack" onClick={redirectToGym}>
                  { name }
                </Typography>
                <Typography className={classes.address} variant="caption" fontFamily="titilliumLight" gutterBottom>
                  <br />
                  { addressString }
                </Typography>
                <Typography className={classes.description} variant="body" color="textSecondary" >
                  { shortDescription }
                </Typography>
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
          style={{ textAlign: "center", paddingLeft: 35, paddingTop: 25 }}  >
          {socialMediaArray.map((item, index) => {
            if(item.id) {
              return (
                <IconButton key={index} onClick={() => { window.location.href = `https://${item.url}`}}>
                  {item.icon}
                </IconButton>
              )
            }
            return '';
          })}
        </Grid>
      </Paper>
    </div>
  );
}

export default ResultGymCard;