import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import changeObjectProperties from '../../../utils/changeObjectProperties';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Context from '../../../context/register.context';

const useStyles = makeStyles((theme) => ({
  selectorAndDetailsContainer: {
    width: "100%",
    height: "90%",
    position: "relative",
    padding: 25
  },
  listContainer: {
  },
  textfieldInAutocomplete: {
    [theme.breakpoints.up('xl')]: {
      minHeight: 300
    },
  },
  selectedOptionsContainer: {
    [theme.breakpoints.up('lg')]: {
      height: 550
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      paddingTop: 25,
      height: 450,
    },
    [theme.breakpoints.between('xs','sm')]: {
      height: 350,
    },
  },
  optionDescriptionTextField: {
    width: 320
  },
  outterOptionDescriptionTextField: {
    padding: 15, 
    textAlign: "center"
  },
  selectorDescription: {
    paddingBottom: 15
  }
}));

const SelectorAndDetails = ({ list, listName, stateIdentifier }) => {
  //TODO: CUSTOM OPTION-T FELVETEL, + GOMB, NEVET MEGADJA NEKI IGY LEHET FELVENNI
  //TODO: Descriptiont adja hozza az optionhoz
  const { state, handleSelectedValues } = useContext(Context);

  const classes = useStyles();
  const listForAutocomplete = changeObjectProperties(list);

  const handleChange = (event, value) => {
    const unique = [];

    value.map(x => unique.filter(a => a.code === x.code).length > 0 ? null : unique.push(x));

    handleSelectedValues(stateIdentifier.reducer, unique)
  };

  const handleDescriptionChange = (event, item) => {
    state[stateIdentifier.state].forEach((i) => {
      if(i.code === item.code) {
        i.description = event.target.value;
      }
    })
    console.log(state[stateIdentifier.state]);
  };
 
  return (
    <Grid container className={classes.selectorAndDetailsContainer} direction="row">
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Typography variant="h5" className={classes.selectorDescription}>{listName}</Typography>
        <Autocomplete
          onChange={handleChange}
          value={state[stateIdentifier.state]}
          groupBy={(option) => option.type}
          multiple
          limitTags={4}
          id="combo-box-demo"
          options={listForAutocomplete}
          sx={{ minWidth: "100%" }}
          renderInput={(params) => <TextField {...params} className={classes.textfieldInAutocomplete} label="Facilities" />}
        />
      </Grid>
      <Grid item xl={6} className={classes.selectedOptionsContainer} style={{ overflowY: state[stateIdentifier.state].length > 0 && "scroll", margin: "0 auto"}}>
        {state[stateIdentifier.state].map((option) => {
          return <div className={classes.outterOptionDescriptionTextField}>
            <TextField
              key={option.label}
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              label={option.label}
              className={classes.optionDescriptionTextField}
              value={option.description}
              onBlur={(event) => handleDescriptionChange(event, option)}
            />
          </div>
        })}
      </Grid>
    </Grid>
  )
}

export default SelectorAndDetails;