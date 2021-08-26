import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    paddingTop: 70,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  }
}));

const RegisterPage = ({ type }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>{ type }</h1>
    </div>
  )

}

export default RegisterPage;