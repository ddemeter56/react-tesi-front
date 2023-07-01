import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Context from '../../../context/gym-register.context';

const useStyles = makeStyles((theme) => ({
  textField: {
    [theme.breakpoints.up('lg')]: {
      width: 300
    },
    
    [theme.breakpoints.up('sm')]: {
      width: 280
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
    },
  },
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

const FormGenerator = ({ formData, stateIdentifier }) => {
  const classes = useStyles();
  const { state, handleFormValues } = useContext(Context);

  function _handleFormValues(event) {
    handleFormValues(event, stateIdentifier.reducer);
  }
  console.log(state); 
  return (
    formData.map((item, index) => {
      return (
        <Grid item>
          <TextField
            className={classes.textField}
            value={state[stateIdentifier.state][item.name]}
            onChange={_handleFormValues}
            inputProps={{ maxLength: item.maxLength }}
            InputLabelProps={ item.type === "time" && {
              shrink: true,
            }}
            {...item}
          />
        </Grid>
      );
    })
  )  
}

export default FormGenerator;