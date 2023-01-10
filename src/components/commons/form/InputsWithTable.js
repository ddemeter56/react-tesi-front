import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Context from '../../../context/register.context';
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
  inputFieldsContainer: {
    display: "flex",
    width: "30%"
  }

}));

const InputsWithTable = ({ formData, stateIdentifier }) => {
  const classes = useStyles();
  const { state, handleFormValues } = useContext(Context);
  console.log(formData)
  console.log(stateIdentifier)

  function _handleFormValues(event) {
    handleFormValues(event, stateIdentifier.reducer);
  }

  return (

    <Grid container spacing={4}>
      {formData.map((item, index) => {
        return (
          <Grid item>
            <TextField
              className={classes.textField}
              value={state[stateIdentifier.state][item.name]}
              onChange={_handleFormValues}
              inputProps={{ maxLength: item.maxLength }}
              InputLabelProps={item.type === "time" && {
                shrink: true,
              }}
              {...item}
            />
          </Grid>
        );
      })}
      <Button style={{paddingTop: "32px", paddingLeft: "32px"}} onClick={() => {console.log('On button click add it to reducer, consider saving storing the values in the input fields')}}>
        Add to table
      </Button>
    </Grid>
  )
}
export default InputsWithTable;