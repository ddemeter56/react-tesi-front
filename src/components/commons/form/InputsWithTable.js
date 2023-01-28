import React, { useContext, useState } from 'react';
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
  const [inputCollection, setInputCollection] = useState(createInitCollection)
  const [dataRow, setDataRow] = useState([])

  const formDataNames = formData.map(item => item.name)

  console.log(formData)
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
    setDataRow(dataRow => [...dataRow, inputCollection])
    console.log(dataRow)
  }

  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {formData.map(i => {
                // Use i.name as key for i18n later
                return <TableCell align="right" key="i.name">{i.label}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRow.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {formDataNames.map((name, index) => {
                  if(index === 0) {
                    return <TableCell component="th" scope="row">{row[name]}</TableCell>
                  }
                  else {
                    return <TableCell align="right">{row[name]}</TableCell>} 
                  
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default InputsWithTable;