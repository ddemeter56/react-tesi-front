import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

const InputsWithTable = ({ formData, stateIdentifier, type = 'gymPrice' }) => {
  const classes = useStyles();
  const { state, handleInputsWithTable } = useContext(Context);
  console.log('__________________')
  console.log(state)
  console.log(stateIdentifier)
  console.log(state[stateIdentifier.state])
  const [inputCollection, setInputCollection] = useState(createInitCollection)
  const [dataRow, setDataRow] = useState([])

  const formDataNames = formData.map(item => item.name)

  
  console.log(inputCollection)
  function createInitCollection() {
    let objectWithFormKeys = {}
    formData.map(i => {
      objectWithFormKeys = { ...objectWithFormKeys, [i.name]: defineTypeOfInputField(i) }
    })
    console.log(objectWithFormKeys)
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

  function addToTableAndForm(openingObject) {
    console.log('addToTableAndForm has been clicked')
    console.log(inputCollection)
    if (!isDuplicate(inputCollection, dataRow)) {
      setDataRow(dataRow => [...dataRow, inputCollection])
    } else {
      alert('vot mar ilyen batya')
    }
  
    console.log(isDuplicate(inputCollection, dataRow))
    console.log(dataRow)
  }

  useEffect(() => {
    handleInputsWithTable(stateIdentifier.reducer, dataRow)
  }, [dataRow])
  
  function isDuplicate(act, arr) {
    if (type === 'gymPrice') {
      return arr.filter(i => i.categoryType === act.categoryType && i.ticketType === act.ticketType).length > 0
    }
  }

  function onRowDelete(rowsToDelete) {
    console.log(rowsToDelete)
    if(rowsToDelete.length === 0) {
      alert('COME ON MAN THATS TOO EASY')
    }
    if(rowsToDelete.length === 1) {
      setDataRow((current) => current.filter(row => (row.categoryType + row.ticketType) !== rowsToDelete[0]))
    } else {
      console.log('Multiple items selected for delete')
      rowsToDelete.map(rowToDelete => {
        setDataRow((current) => current.filter(row => (row.categoryType + row.ticketType) !== rowToDelete))
      })
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
        <Button style={{ paddingTop: "32px", paddingLeft: "32px" }} onClick={addToTableAndForm}>
          Add to table
        </Button>
      </Grid>
      <EnhancedTable formData={formData} rows={state[stateIdentifier.state]} onRowDelete={onRowDelete}/>
    </>
  )
}
export default InputsWithTable;