import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

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
  const [ formValues, setFormValues ] = useState(initFormValues(formData, localStorageIdentifier));
  

  useEffect(() => {
    updateLocalStorage(localStorageIdentifier, formValues)
  }, [formValues]);


  const handleFormChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value });
  };


  return (
    formData.map((item, index) => {
      return (
        <Grid item>
          <TextField
            value={formValues[item.name]}
            onChange={handleFormChange}
            inputProps={{ maxLength: item.maxLength }}
            {...item}
          />
        </Grid>
      );
    })
  )  
}

export default FormGenerator;