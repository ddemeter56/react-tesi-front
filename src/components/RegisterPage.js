import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getEnvironment } from '../hooks/useFetch';

import { API_PATH } from '../utils/apiPaths';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/** types can be: pt, gym-owner, gym-manager */
export default function RegisterPage({ type }) {
  const classes = useStyles();
  const [termsAccepted, settermsAccepted] = useState(false);
  const [showAcceptError, setShowAcceptError] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value, })
  }


  const submitForm = () => {
    if(termsAccepted) {
      fetch(`${getEnvironment()}${API_PATH.USER_REGISTER}${type}`)
        .then(data => {data.json(); console.log(data)});
    } else {
      setShowAcceptError(true)
    }
  }
  
  const handleTermAccept = () => {
    settermsAccepted(!termsAccepted);
    if(!termsAccepted) {
      setShowAcceptError(false)
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up - {type.toUpperCase()}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formValues.username}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} style={{ display: "inherit" }}>
              <FormControlLabel
                control={<Checkbox onChange={() => handleTermAccept()} value={termsAccepted} style={{ color: showAcceptError ? "red" : "black" }} />}
                label=""
              />
              <p style={{ color: showAcceptError ? "red" : "black" }}>A használati feltételeket elolvastam és elfogadom</p>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
           Regisztrálás
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Van már fiókod? Jelentkezz be
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}