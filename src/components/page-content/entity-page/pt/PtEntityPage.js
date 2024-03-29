import React from 'react';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    paddingTop: 70,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  tableContainer: {
    maxHeight: 400,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "100%",
    }
  }, 
  chipContainer: {
    padding: 30
  },
  ptHeaderContainer: {
    width: "50%",
    margin: '0 auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  profilePicture: {
    width: 250,
    height: 250
  }
}));


const PtEntityPage = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const setProfilePicture = () => {
    if(data.images[0]) return `https://api.tesi.life/${data.images[0].publicAddress}`;
    return '';
  }
  const generatePriceTableRows = (array) => {
    return (
      array.map((row) => (
        <TableRow key={row.ticketId}>
          <TableCell >
            {row.categoryType}
          </TableCell>
          <TableCell align="center">{row.ticketType}</TableCell>
          <TableCell align="center">{row.validForDays}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">{row.currency}</TableCell>
        </TableRow>
      ))
    )
  }
  const generateSpeciLabel = (item) => {
    return item.specializationCode.code === 1 ? item.customName : item.specializationCode.name;
  }
  return (
    <div className={classes.container}>
      <Grid className={classes.ptHeaderContainer} container direction="row" justify="center" alignItems="center">
        {
          <Grid item xl={6} lg={6}>
            <img src={`${setProfilePicture()}`} className={classes.profilePicture} alt="profile_pic"/>
          </Grid>
        }
        <Grid item xl={6} lg={6}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Typography variant="h3" style={{ paddingRight: 15, textAlign: "center"}}>{data.firstName} {data.lastName}</Typography>
            <Grid item container direction="column" justify="center" alignItems="center" gap={5} >
              <Grid item>
                <Typography variant="h6" >{data.phoneNumber}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" >{data.email}</Typography>
              </Grid>
              <Grid item >
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
              </Grid>
                                                                                         
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Divider style={{ margin: 20}}/>
      
      <Typography>{data.description}</Typography>
      <Grid container alignItems="center">
        <Grid item xl={6}>
          <Grid container direction="row" justify="flex-start" alignItems="center" alignContent="center" style={{ padding: 20}}>
            <Grid item >
              <Typography style={{ textAlign: "center" }} variant="button">Spoken laguages: </Typography>
            </Grid>
            {data.language.map((item, index) => {
              return (
                <Grid item style={{ padding: 3}} key={item + index}>
                  <Chip label={t(item.language.code)} color="secondary" clickable/>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xl={6}>
          <Grid container direction="row" justify="flex-start" alignItems="center" alignContent="center" style={{ padding: 20}}>
            <Grid item>
              <Typography style={{ textAlign: "center" }} variant="button">Certifications: </Typography>
            </Grid>
            {data.certifications.map((item, index) => {
              return (
                <Grid item style={{ padding: 3}} key={item + index}>
                  <Chip label={item.certification.name} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      
      
      <Divider style={{ margin: 20}}/>

      <Grid container justify="center" alignItems="center" alignContent="center" direction="row">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography style={{ textAlign: "center", paddingBottom: 15 }} variant="h5">Specializations</Typography>
        </Grid>
        {data.specializations.map((item, index) => {
          console.log(item);
          return(
            <Grid item xl={8} key={index+1}>
              <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography className={classes.heading}>{generateSpeciLabel(item)}</Typography>
                  <Typography className={classes.secondaryHeading}>{item.ticketPricing[0].amount}{item.ticketPricing[0].currency} / {item.ticketPricing[0].ticketType.toUpperCase( )}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                  <Typography>
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          )
        })}
      </Grid>


      <Divider style={{ margin: 20}}/>

      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography style={{ textAlign: "center", paddingBottom: 15 }} variant="h5">Pricing</Typography>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}justify="center" alignItems="center" alignContent="center">
          <TableContainer className={classes.tableContainer}>
            <Table  stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Category Type</TableCell>
                  <TableCell align="center">Ticket Type</TableCell>
                  <TableCell align="center">Valid for days</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Currency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {generatePriceTableRows(data.gymPricing)}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      Calendar for logged in users
    </div>
  )
}
export default PtEntityPage;