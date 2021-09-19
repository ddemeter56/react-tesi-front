import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 300,
    borderRadius: 100,
    padding: 15,
    margin: 15,
    border: "1px solid #eeeeee",
    minWidth: 200,
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
      <Grid container justify="space-between"
        alignContent="space-around"
        alignItems="center"
        style={{textAlign: "center", width: "100%"}}>
        {cardContent.map((item, i) => {
          return (
            <Grid item xl={2} lg={2} md={4} sm={6} xs={12} className={classes.card} key={i}>
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