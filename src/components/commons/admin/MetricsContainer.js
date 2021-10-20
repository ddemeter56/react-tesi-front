import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import AdminBoxMetrics from './AdminBoxMetrics';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up('sm')] : {
      width: 300
    },
    padding: "15px 0px 0px 15px",
    position: "relative"
  }
}));
const MetricsContainer = ({ data, title, forwardButtonText }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  
  const changeStepperValue = useCallback(() => {
    activeStep === data.length - 1 ? setActiveStep(0) : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, [activeStep, data.length]);

  useEffect(() => {
    const intervalID = setInterval(changeStepperValue, 5000);
    return () => clearInterval(intervalID);
  }, [changeStepperValue])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper className={classes.paper}>
      <div style={{ width: 50, height: 50, background: "red", margin: 15, top: 0, right: 0, position: "absolute" }}>
      </div>
      <Typography variant="h5">{title}</Typography>
      <Grid container alignItems="strech" justifyContent="space-around" spacing={2}>
        <Grid item>
          <div className={classes.paper}>
            <AdminBoxMetrics title={data[activeStep].title} numbers={data[activeStep].numbers} description={data[activeStep].description} />
          </div>
        </Grid>
      </Grid> 
      <MobileStepper
        variant="dots"
        steps={data.length}
        position="relative"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === data.length -1}>
          Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          Back
          </Button>
        }
      />
    </Paper>
  )
}


export default MetricsContainer;