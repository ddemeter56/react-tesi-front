import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import changeObjectProperties from '../../../utils/changeObjectProperties';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  selectorAndDetailsContainer: {
    width: "100%",
    height: "90%",
    position: "relative"
  },
  listContainer: {
  },
  textfieldInAutocomplete: {
    [theme.breakpoints.up('lg')]: {
      minHeight: 300
    },
  },
  selectedOptionsContainer: {
    margin: "auto",
    [theme.breakpoints.up('lg')]: {
      height: 575
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 450,
    },
    [theme.breakpoints.between('xs','sm')]: {
      height: 350,
    },
    overflowY: "scroll"
  },
  optionDescriptionTextField: {
    width: 320
  },
  outterOptionDescriptionTextField: {
    padding: 15, 
    textAlign: "center"
  }
}));

const SelectorAndDetails = ({ list, listName }) => {
  const [ selectedOptions, setSelectedOptions ] = useState([]);

  const classes = useStyles();
  const listForAutocomplete = changeObjectProperties(list);

  const handleChange = (event, value) => {
    const unique = [];

    value.map(x => unique.filter(a => a.code === x.code).length > 0 ? null : unique.push(x));
    
    console.log(unique);
    setSelectedOptions(unique);
  };

  return (
    <Grid container className={classes.selectorAndDetailsContainer} direction="row">
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        Sometext to describe what should be happening here
        <Autocomplete
          onChange={handleChange}
          value={selectedOptions}
          groupBy={(option) => option.type}
          multiple
          limitTags={4}
          id="combo-box-demo"
          options={listForAutocomplete}
          sx={{ minWidth: "100%" }}
          renderInput={(params) => <TextField {...params} className={classes.textfieldInAutocomplete} label="Facilities" />}
        />
      </Grid>
      <Grid item xl={6} className={classes.selectedOptionsContainer}>
        {selectedOptions.map((option) => {
          return <div className={classes.outterOptionDescriptionTextField}>
            <TextField
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              label={option.label}
              className={classes.optionDescriptionTextField}
            />
          </div>
        })}
      </Grid>
    </Grid>
  )
}

export default SelectorAndDetails;