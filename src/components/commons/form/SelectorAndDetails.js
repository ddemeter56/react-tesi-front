import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import changeObjectProperties from '../../../utils/changeObjectProperties';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Context from '../../../context/gym-register.context';

const useStyles = makeStyles((theme) => ({
  selectorAndDetailsContainer: {
    width: "100%",
    height: "90%",
    position: "relative",
    padding: 25,
    justifyContent: "center"
  },
  listContainer: {
  },
  textfieldInAutocomplete: {
    [theme.breakpoints.up('xl')]: {
      minHeight: 300
    },
  },
  selectedOptionsContainer: {
    width: "100%",
    [theme.breakpoints.up('lg')]: {
      height: 380
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      paddingTop: 25,
      height: 400,
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

    value.map(x => unique.filter(a => a.facility.code === x.code).length > 0 ? null : unique.push({"facility": x, ticketPricing: [], opening: {}}));

    handleSelectedValues(stateIdentifier.reducer, unique)
  };

  const handleDescriptionChange = (event, item, index) => {
    const newList = state[stateIdentifier.state];

    newList[index].facility.description = event.target.value;
    handleSelectedValues(stateIdentifier.reducer, newList);
  };
 
  return (
    <Grid container className={classes.selectorAndDetailsContainer} direction="row">
      <Grid justifyContent={'center'} item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Typography variant="h5" className={classes.selectorDescription}>{listName}</Typography>
        <Autocomplete
          onChange={handleChange}
          value={state[stateIdentifier.state].map(i => i.facility)}
          filterSelectedOptions
          groupBy={(option) => option.type}
          multiple
          limitTags={4}
          id="combo-box-demo"
          options={listForAutocomplete.map(i => i.facility)}
          sx={{ minWidth: "100%" }}
          renderInput={(params) => <TextField {...params} className={classes.textfieldInAutocomplete} label="Facilities" />}
        />
      </Grid>
      <Grid item xl={6} className={classes.selectedOptionsContainer} style={{ overflowY: state[stateIdentifier.state].length > 0 && "scroll", margin: "0 auto"}}>
        {state[stateIdentifier.state].map((option, index) => {
          return <div className={classes.outterOptionDescriptionTextField}>
            <TextField
              key={option.facility.label}
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ maxLength: 50 }}
              required={true}
              label={option.facility.label}
              className={classes.optionDescriptionTextField}
              value={option.facility.description}
              onChange={(event) => handleDescriptionChange(event, option, index)}
            />
          </div>
        })}
      </Grid>
    </Grid>
  )
}

export default SelectorAndDetails;