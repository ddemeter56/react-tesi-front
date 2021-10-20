import React from 'react';
import { makeStyles } from '@mui/styles';
import AdminPageBasicInformation from '../../../commons/admin/AdminPageBasicInformation';
import MetricsAppointments from './MetricsAppointments';
import MetricsKeeptrack from './MetricsKeepTrack';

const actualDate = new Date();

const useStyles = makeStyles((theme) => ({
  adminPageContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    [theme.breakpoints.only('xl')] : {
      width: "50%",
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

const AdminPagePt = () => {
  const classes = useStyles();
  return (
    <div className={classes.adminPageContainer}>
      <AdminPageBasicInformation />
      <MetricsAppointments data={appointmentData}/>
      <MetricsKeeptrack data={keepTrackData} /> 
    </div>
  )
}

export default AdminPagePt;

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
