import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { getEnvironment } from '../hooks/useFetch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { API_PATH } from '../utils/apiPaths';
import { redirectToLogin } from '../utils/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '6px',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    minHeight: 400,
    marginTop: '18px',
  },
  submit: {
    margin: '18px 0px 12px',
  },
}));

const renderIcon = (responseData) => {
  if(!responseData) return <LockOutlinedIcon />;

  if(responseData.statusCode === 400) 
  { return < HighlightOffIcon/> } else 
  { return <CheckCircleIcon  />}
}

const renderText = (responseData) => {
  if(!responseData) return (
    <Typography component="h1" variant="h5">
      Sign up 
    </Typography>
  );

  
  if(responseData.statusCode === 400) 
  { return (
    <Typography component="h1" variant="h5" style={{ color: "red" }}>
      Hiba a regisztráció során 
    </Typography>
  )} else 
  { return (
    <Typography component="h1" variant="h5" style={{ color: "green" }}>
      Sikeres regisztráció
    </Typography>
  )}
}

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
  const [responseData, setResponse] = useState(null);

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value, })
  }

  const renderButton = (responseData) => {
    if(!responseData) return (
      <>
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
      </>
    );
  
    
    if(responseData.statusCode === 400) 
    { return (
      <>
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
      </>
    )} else 
    { return (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={redirectToLogin}
      >
        Bejelentkezés
      </Button>
    )}
  }

  const submitForm = () => {
    if(termsAccepted) {
      fetch(`${getEnvironment()}${API_PATH.USER_REGISTER}${type}`, {
        headers: new Headers({'content-type': 'application/json'}),
        method: "POST",
        body: JSON.stringify(formValues)
        
      })
        .then(response => response.json())
        .then(data => setResponse(data));
      console.log(responseData)
      // Kene message melle code: pl: statusCode: 200, OK, 400 Nem ok
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
          {
            renderIcon(responseData)
          }
          
        </Avatar>
        {
          renderText(responseData)
        }
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
          { 
            renderButton(responseData)
          }
        </form>
      </div>
    </Container>
  );
}