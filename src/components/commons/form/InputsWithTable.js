import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Context from '../../../context/register.context';
import EnhancedTable from '../enhanced-table/EnhancedTable';
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

/**
 * TODO, Do not let user add empty or not fully completed record
 * @param {*} param0 
 * @returns 
 */
const InputsWithTable = ({ formData, stateIdentifier, type = 'gymPrice' }) => {
  const classes = useStyles();
  const { state, handleInputsWithTable } = useContext(Context);
  const [inputCollection, setInputCollection] = useState(createInitCollection)
  const [dataRow] = useState(state[stateIdentifier.state])

  function createInitCollection() {
    let objectWithFormKeys = {}
    formData.map(i => {
      objectWithFormKeys = { ...objectWithFormKeys, [i.name]: defineTypeOfInputField(i) }
    })
    return objectWithFormKeys
  }

  function defineTypeOfInputField(field) {
    if (field.type === 'text') return ''
    if (field.type === 'number') return undefined
  }

  function _handleFormValues(event) {
    const { value, name } = event.target
    setInputCollection({ ...inputCollection, [name]: value })
    console.log(inputCollection)
    // handleFormValues(event, stateIdentifier.reducer);
  }

  function convertFieldValuesOf(inputCollection) {
    const newInputCollection = inputCollection;

    newInputCollection['amount'] =  +inputCollection['amount'];
    newInputCollection['validForDays'] = +inputCollection['validForDays'];

    return newInputCollection;
  }

  function addToTableAndForm(openingObject) {
    if (!isDuplicate(inputCollection, state[stateIdentifier.state])) {
      handleInputsWithTable(stateIdentifier.reducer, [...state[stateIdentifier.state], convertFieldValuesOf(inputCollection)])
    } else {
      alert('Already existing')
    }
  }

  useEffect(() => {
    handleInputsWithTable(stateIdentifier.reducer, dataRow);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataRow])
  
  function isDuplicate(act, arr) {
    if (type === 'gymPrice') {
      return arr.filter(i => i.categoryType === act.categoryType && i.ticketType === act.ticketType).length > 0
    }
  }

  function onRowDelete(rowsToDelete) {
    if(rowsToDelete.length === 0) {
      alert('Nothing to delete')
    }
    if(rowsToDelete.length === 1) {
      const listWithoutItem = state[stateIdentifier.state].filter(row => (row.categoryType + row.ticketType) !== rowsToDelete[0])
      handleInputsWithTable(stateIdentifier.reducer, listWithoutItem)
    } else {
      let listWithoutItems = state[stateIdentifier.state]
      rowsToDelete.map(rowToDelete => {
        listWithoutItems = listWithoutItems.filter(row => (row.categoryType + row.ticketType) !== rowToDelete)
      })
      handleInputsWithTable(stateIdentifier.reducer, listWithoutItems)
    }
  }

  return (
    <>
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
        <Grid item>
          <Button onClick={addToTableAndForm}>
            Add to table
          </Button>
        </Grid>
      </Grid>
      <EnhancedTable formData={formData} rows={state[stateIdentifier.state]} onRowDelete={onRowDelete}/>
    </>
  )
}
export default InputsWithTable;