import React, { useState, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import FormGenerator from '../form/FormGenerator';
import SelectorAndDetails from '../form/SelectorAndDetails';
import InputsWithTable from '../form/InputsWithTable'
import { fetchData } from '../../../utils/urlQuery';
import AuthContext from '../../../context/auth.context';
import Context from '../../../context/gym-register.context';
import CustomizedSnackbars from '../snackbar/CustomizedSnackbar';
import { useHistory } from 'react-router-dom';
import { SnackbarContext } from '../../../context/snackbar.context';
import { HTTP_ERROR_CODES } from '../../../utils/httpCodes';
import { SpinnerContext } from '../../../context/spinner.context';

const useStyles = makeStyles((theme) => ({
  stepperContainer: {
    paddingTop: 90,
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
    },
  },
  formContainer: {
    width: 300,
    height: 600,
    margin: "0 auto",
  }
}));

const generateStepContent = (step) => {
  if (step.type === "FormGenerator") return <FormGenerator formData={step.data} stateIdentifier={step.stateIdentifier} />
  if (step.type === "SelectorAndDetails") return <SelectorAndDetails list={step.data} listName={step.selectorTitle} stateIdentifier={step.stateIdentifier} />
  if (step.type === "InputsWithTable") return <InputsWithTable formData={step.data} stateIdentifier={step.stateIdentifier} />
}

const HorizontalLinearStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const { userDetails } = useContext(AuthContext);
  // TODO: refactor this terrible naming
  const { state } = useContext(Context);
  const { handleSnackbar } = useContext(SnackbarContext);
  const { setLoading } = useContext(SpinnerContext);
  const history = useHistory();

  console.log(steps)
  const classes = useStyles();
  const isStepOptional = (optional) => {
    return optional === true;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const redirectToAdminPage = () => {
    history.push('/admin');
  };

  const handleFinish = () => {
    setLoading(true);
    fetchData('/register/gym', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userDetails.token}`
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(data => {
        console.log(data);
        if (HTTP_ERROR_CODES.includes(data.statusCode)) {
          if (Array.isArray(data.message)) {
            const alertMessage = data.message.map(i => i)
            alert(alertMessage.join('\n'));
            handleSnackbar(alertMessage, 'error');
          };
          handleSnackbar(data.message + ': ' + data.error, 'error')
        } else if (data.message === 'Gym successfully registered') {
          alert('Gym successfully registered');

          handleSnackbar('Gym successfully registered', 'success');
          redirectToAdminPage();
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
      });
    setLoading(false);
  }

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className={classes.stepperContainer}>
      <CustomizedSnackbars type="succes" open={true} message="asd" />
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(step.optional)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Grid container direction="column" spacing={2} className={classes.formContainer} justifyContent="center" alignItems="center" >
            {steps.map((step, index) => {
              return activeStep === index &&
                generateStepContent(step);
            })}
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default HorizontalLinearStepper;