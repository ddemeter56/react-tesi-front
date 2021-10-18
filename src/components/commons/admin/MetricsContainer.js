import React from 'react';
import { makeStyles } from '@mui/styles';
import AdminBoxMetrics from './AdminBoxMetrics';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
    position: "relative"
  }
}));
const MetricsContainer = ({ data, title, forwardButtonText }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">{title}</Typography>
      <Grid container alignItems="strech" justifyContent="space-around" spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xl={4} lg={4} sm={4} xs={12} key={item.key}>
              <div className={classes.paper}>
                <AdminBoxMetrics title={item.title} numbers={item.numbers} description={item.description} />
              </div>
            </Grid>
          )
        })}
      </Grid>
      <div style={{ position: "absolute", right: 0, bottom: 0, paddingTop: 15}}>
        <Button variant="text">
          {forwardButtonText}
        </Button>
      </div>
    </Paper>
  )
}


export default MetricsContainer;