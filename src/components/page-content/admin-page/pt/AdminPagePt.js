import React from 'react';
import { makeStyles } from '@mui/styles';
import MetricsAppointments from './MetricsAppointments';
import MetricsKeeptrack from './MetricsKeepTrack';
import DashboardHeader from '../../../commons/admin/DashboardHeader';
import VerticalBarSeries from '../../../commons/chart/VerticalBarSeries';
import Grid from '@mui/material/Grid';

const actualDate = new Date();

const useStyles = makeStyles((theme) => ({
  adminPageContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    [theme.breakpoints.only('xl')] : {
      width: "60%",
      margin: "0 auto"
    },
  },
  adminPageBasicInformation: {
    textAlign: "center",
    position: "relative",
    paddingBottom: 25
  },
  admingPagePicture: {
    display: "block",
    maxWidth: 270,
    maxHeight: 270,
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
    width: "auto",
    height: "auto",
    padding: "10px 15px 10px 15px", 
  }
}));

const AdminPagePt = ({ userDetails }) => {
  const classes = useStyles();
  console.log(userDetails);
  return (
    <div className={classes.adminPageContainer}>
      <DashboardHeader type={userDetails[0]} isRegistered={userDetails.isRegistered} />
      <Grid container justifyContent="space-around" spacing={5}>
        <Grid item>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <MetricsAppointments data={appointmentData}/>
            </Grid>
            <Grid item> 
              <MetricsKeeptrack data={keepTrackData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <VerticalBarSeries data={chartData} />
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminPagePt;
const chartData = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
]

const keepTrackData = [
  { 
    key: "allKeepTrackClients", 
    title: "Keep track users",
    numbers: 125,
    description: "Clients using Keep Track"
  },
  {
    key: "waitingForPlan",
    title: "Waiting for plan",
    numbers: 15,
    description: "Missing plan for upcoming appointment"
  }
]

const appointmentData = [
  {
    key: "all",
    title: "All",
    numbers: 4321,
    description: "Since you registered"
  },
  {
    key: "pending",
    title: "Pending",
    numbers: 12,
    description: `On ${actualDate.toLocaleDateString()}`
  },
  {
    key: "unseen",
    title: "Unseen",
    numbers: 23,
    description: "Since you last checked"
  }
];
