import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 250,
    borderRadius: 100,
    padding: 15,
    margin: 15,
    border: "1px solid #eeeeee",
    
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
  },

  cardIcon: {
    textAlign: "center"
  },

  cardHeader: {
    textAlign: "center"
  },

  shortDescription: {
    textAlign: "center",
    paddingTop: 10
  },
  infoDescription: {
    cursor: "pointer", 
    textAlign: "center",
    alignSelf:"center",
    marginTop: "auto"
  },
  flowSectionText: {
    padding: 15,
    textAlign: "center"
  }
}));

const cardContent = [
  {icon: <SearchIcon style={{fontSize: 60}} color="secondary" />, header: "Search", shortDescription: "Find your trainer", infoDescription: "Use our built in search tool to find the best GYM And Personal Trainer"},
  {icon: <DateRangeIcon style={{fontSize: 60}} color="secondary"/>, header: "Plan", shortDescription: "Schedule your trainings", infoDescription: "Book an appointment at your selected trainer. Once the trainer verified your request your are set to go!"},
  {icon: <FitnessCenterIcon style={{fontSize: 60}} color="secondary"/>, header: "Train", shortDescription: "You bring the change", infoDescription: "Basically, you do the hard work. Stay focused and train hard!"},
  {icon: <TrendingUpIcon style={{fontSize: 60}} color="secondary"/>, header: "Keep track", shortDescription: "Check your improvement", infoDescription: "We will supply you with all the details about your previous and your upcoming trainings as well"},
]

const FlowSection = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.flowSectionText}>
        <Typography  variant="h3">Train with Tesi</Typography>
      </div>
      <Grid container justify="center"
        alignContent="space-evenly"
        alignItems="center"
        flexDirection="row" style={{textAlign: "center", width: "100%"}}>
        {cardContent.map((item, i) => {
          return (
            <Grid xl={2} lg={2} md={4} sm={6} xs={12}  className={classes.card}>
              <div className={classes.cardIcon}>
                {item.icon}
              </div>
              <div className={classes.cardHeader}>
                <Typography variant="h4">{item.header}</Typography>
              </div>
              <div className={classes.shortDescription}>
                <Typography variant="h5" color="textSecondary">{item.shortDescription}</Typography>
              </div>
              
              <div className={classes.infoDescription}>
                <Tooltip title={item.infoDescription}>
                  <HelpOutlineIcon />
                </Tooltip>
              </div>
            </Grid>
          )
        })}    
      </Grid>
      <div className={classes.flowSectionDetails}>
        <Typography style={{ paddingTop: 15, textAlign: "center", color: "#797979" }}variant="body2" display="block" gutterBottom>
          Menedzseld az időd és a vendégek fejlődését egy helyen! Több információ <a href="asd">itt</a>
        </Typography>
      </div>
    </div>
  )
}

export default FlowSection;