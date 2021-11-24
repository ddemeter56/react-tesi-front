import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

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

const initFormValues = (formData, identifier ) => {
  if(isFormStoredInLocalStorage(identifier)) {
    return JSON.parse(localStorage.getItem(identifier));
  }
  const formStructure = formData.reduce((prev, current) => { return {...prev, [current.name]: ''} }, {})
  localStorage.setItem(identifier, JSON.stringify(formStructure));
  return formStructure;
};

const isFormStoredInLocalStorage = (identifier) => {
  return localStorage.getItem(identifier);
}

const updateLocalStorage = (identifier, formValues ) => {
  localStorage.setItem(identifier, JSON.stringify(formValues));
}



const FormGenerator = ({ formData, localStorageIdentifier }) => {
  const classes = useStyles();
  const [ formValues, setFormValues ] = useState(initFormValues(formData, localStorageIdentifier));

  useEffect(() => {
    updateLocalStorage(localStorageIdentifier, formValues)
  }, [formValues, localStorageIdentifier]);


  const handleFormChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };


  return (
    formData.map((item, index) => {
      return (
        <Grid item>
          <TextField
            className={classes.textField}
            value={formValues[item.name]}
            onChange={handleFormChange}
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