import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import changeObjectProperties from '../../../utils/changeObjectProperties';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  selectorAndDetailsContainer: {
    height: "90%",
    backgroundColor: "lightgrey"
  },
  listContainer: {
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
    <Grid container className={classes.selectorAndDetailsContainer} direction="row" justifyContent="center">
      <Grid item>
        <Autocomplete
          onChange={handleChange}
          value={selectedOptions}
          groupBy={(option) => option.type}
          multiple
          limitTags={3}
          id="combo-box-demo"
          options={listForAutocomplete}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Facilities" />}
        />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          {selectedOptions.map((option) => {
            return <Grid item>
              <TextField 
                InputLabelProps={{
                  shrink: true,
                }}
                label={option.label}
              />
            </Grid>
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SelectorAndDetails;