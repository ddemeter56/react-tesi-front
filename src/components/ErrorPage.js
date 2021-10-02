import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ErrorPage = ({ type, message }) => {
  return (
    <Grid style={{ paddingTop: 150 }} container direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <ErrorIcon fontSize="large" style={{ color: "red" }} />
      </Grid>
      <Grid item>
        <Typography variant="h2" fontFamily="TitilliumLight">{type}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" fontFamily="TitilliumExtraLight">{message.toString()}</Typography>
      </Grid>
    </Grid>
  )
}

export default ErrorPage;