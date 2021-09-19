import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AdminBoxMetrics from './AdminBoxMetrics';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

const actualDate = new Date();

const data = {
  specializations : [
    {
      "id": 2,
      "specializationCode": {
        "code": 2,
        "name": "Weight Loss"
      },
      "customName": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "ticketPricing": [
        {
          "ticketId": 77,
          "categoryType": "daily",
          "ticketType": "daily",
          "amount": "3000.00",
          "currency": "HUF",
          "validForDays": 1
        }
      ]
    },
    {
      "id": 2,
      "specializationCode": {
        "code": 2,
        "name": "Weight Loss"
      },
      "customName": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "ticketPricing": [
        {
          "ticketId": 77,
          "categoryType": "daily",
          "ticketType": "daily",
          "amount": "3000.00",
          "currency": "HUF",
          "validForDays": 1
        }
      ]
    },
    {
      "id": 2,
      "specializationCode": {
        "code": 2,
        "name": "Weight Loss"
      },
      "customName": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "ticketPricing": [
        {
          "ticketId": 77,
          "categoryType": "daily",
          "ticketType": "daily",
          "amount": "3000.00",
          "currency": "HUF",
          "validForDays": 1
        }
      ]
    },
    {
      "id": 2,
      "specializationCode": {
        "code": 1,
        "name": "Empty"
      },
      "customName": "Egyedi specializációs",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "ticketPricing": [
        {
          "ticketId": 77,
          "categoryType": "daily",
          "ticketType": "daily",
          "amount": "3000.00",
          "currency": "HUF",
          "validForDays": 1
        }
      ]
    }
  ],
  certifications : [
    {
      "id": 2,
      "customCertification": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "certification": {
        "code": 4,
        "name": "rekreációs mozgásprogram-vezető",
        "additional": "aqua tréner",
        "category": "Ráépülés "
      }
    },
    {
      "id": 2,
      "customCertification": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "certification": {
        "code": 4,
        "name": "rekreációs mozgásprogram-vezető",
        "additional": "aqua tréner",
        "category": "Ráépülés "
      }
    },
    {
      "id": 2,
      "customCertification": "",
      "description": "is a long established fact that a reader will be distracted by the readable content of a ",
      "certification": {
        "code": 4,
        "name": "rekreációs mozgásprogram-vezető",
        "additional": "aqua tréner",
        "category": "Ráépülés "
      }
    }
  ]
}

const appointmentData = [
  {
    key: "all",
    title: "All",
    numbers: 4321,
    description: "Since you registered",
    link: "https://google.com"
  },
  {
    key: "pending",
    title: "Pending",
    numbers: 12,
    description: `On ${actualDate.toLocaleDateString()}`,
    link: "https://google.com"
  },
  {
    key: "unseen",
    title: "Unseen",
    numbers: 23,
    description: "Since you last checked",
    link: "https://google.com"
  }
]

const useStyles = makeStyles((theme) => ({
  profileSection: {
    minHeight: 250,
    width: "100%",
    marginBottom: 25,
    marginTop: 15
  },
  profilePicture: {
    display: "block",
    maxWidth:200,
    maxHeight:200,
    width: "auto",
    height: "auto",
    padding: 10,
    borderBottom: "1px solid rgb(230 230 230)"
  },
  paper: {
    display: 'flex',
    minHeight: 165,
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

const AdminPagePt = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.profileSection}>
        <Grid container alignItems="center" justify="flex-start" spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <img className={classes.profilePicture} alt="profile_pic" src="https://www.thetrainingroom.com/getattachment/4b7d4ad6-7b4f-4611-9631-ab299fafda05/Personal-Trainer-Motivation-01.jpgaspx"></img>
            <Typography variant="button" color="primary" style={{ paddingLeft: 15}}>
              Manage your pictures
            </Typography>
          </Grid>
          <Grid container xl={8} lg={8} md={8} sm={8} xs={12} direction="row ">
            <Grid item>
              <Typography variant="h5" color="primary" style={{ paddingLeft: 15}}>
                User name
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="button" color="primary" style={{ paddingLeft: 15}}>
                
                {data.certifications.map((item, index) => {
                  return (
                    <Grid item style={{ padding: 3}} key={item + index}>
                      <Chip label={item.certification.name} />
                    </Grid>
                  )
                })}

              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="button" color="primary" style={{ paddingLeft: 15}}>
                Meg néhány dolog és ha módosítani akar ezeken kinyílik
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Typography style={{ textAlign: "center" }} component="h2" variant="h5"> Appointments</Typography>
      <Grid container alignItems="strech" justify="space-evenly" spacing={2}>
        {appointmentData.map((item) => {
          return (
            <Grid item xl={4} lg={4} sm={4} xs={12} key={item.key}>
              <Paper className={classes.paper}>
                <AdminBoxMetrics title={item.title} numbers={item.numbers} link={item.link} description={item.description} />
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default AdminPagePt;