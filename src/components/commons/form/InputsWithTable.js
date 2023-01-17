import React, { useContext, useState } from 'react';
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
  const [ inputCollection, setInputCollection ] = useState(createInitCollection)
  console.log(formData)
  console.log(inputCollection)
  function createInitCollection() {

    let objectWithFormKeys = {}
    formData.map(i => {
      objectWithFormKeys = {...objectWithFormKeys, [i.name]: defineTypeOfInputField(i)}
    })
    console.log(objectWithFormKeys)
    return objectWithFormKeys
  }

  function defineTypeOfInputField(field) {
    if(field.type === 'text') return ''
    if(field.type === 'number') return undefined
  }
  function _handleFormValues(event) {
    const { value, name } = event.target
    setInputCollection({...inputCollection, [name]: value})
    console.log(inputCollection)
    // handleFormValues(event, stateIdentifier.reducer);
  }

  function addToTableAndForm(openingObject) {
    console.log('addToTableAndForm has been clicked')
    console.log(inputCollection)
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
      <Button style={{paddingTop: "32px", paddingLeft: "32px"}} onClick={addToTableAndForm}>
        Add to table
      </Button>
    </Grid>
  )
}
export default InputsWithTable;