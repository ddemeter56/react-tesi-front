import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.between('xs','sm')]: { 
      width: "95%",
      height: 200,
    },
    [theme.breakpoints.between('md','xl')]: { 
      width: 400,
      height: 180,
    },
  },
  image: {
    width: 128,
    height: 128,
    background: "yellow"
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

  }
}));

const ResultGymCard = ({ props }) => {
  const classes = useStyles();
  const history = useHistory();


  // Display these variables from props
  const { name, addressString, shortDescription, earliestOpening, latestClosing, referenceCode } = props;
  const { facebookUserId, instagramUserId, twitterUserId, youtubeUserId, webPageUserId} = props;

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
      <Paper className={classes.paper}>
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justify="space-evenly"
          style={{ textAlign: "center" }}  >
          <Grid item xs={6}> 
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
            <Typography variant="caption">
              <br /> { earliestOpening } - { latestClosing }
            </Typography>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography style={{ cursor: "pointer" }} gutterBottom variant="button" onClick={redirectToGym}>
                  { name }
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <br />
                  { addressString }
                </Typography>
                <Typography className={classes.description} variant="body2" color="textSecondary" >
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
          style={{ textAlign: "center", paddingLeft: 35 }}  >
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