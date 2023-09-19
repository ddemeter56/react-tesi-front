// LogInDialog.js
import React, { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PUBLIC_API_PATH } from '../../../utils/apiPaths';
import { getEnvironment } from '../../../hooks/useFetch';
import { SnackbarContext } from '../../../context/snackbar.context';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minWidth: '300px',
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: '48px',
    color: 'green',
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    left: theme.spacing(2), // Adjust the left position as needed
    top: theme.spacing(1),
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column', // Display title under the icon
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    paddingTop: 20
  },
  titleIcon: {
    marginRight: theme.spacing(1),

  },
}));

const LogInDialog = ({ open, onClose, title }) => {
  const classes = useStyles();
  const [userIdentifier, setUserIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { handleSnackbar } = useContext(SnackbarContext);

  const handleLogin = async () => {
    
    try {
      // Construct the request body
      const requestBody = {
        userIdentifier,
        password,
      };

      // Perform a POST request to your API endpoint
      const response = await fetch(`${getEnvironment(true)}${PUBLIC_API_PATH.AUTH_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Successful login
        console.log(response)
        handleSnackbar('Sikeres bejelentkezés', 'success');
      } else {
        // Handle authentication error or other response codes
        handleSnackbar('Sikertelen bejelentkezés', 'error');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
        style={{"position": "absolute"}}
      >
        <CloseIcon />
      </IconButton>
      {showSuccess ? (
        <DialogContent>
          <CheckCircleIcon className={classes.icon} />
          <p>Login Successful!</p>
        </DialogContent>
      ) : (
        <>
        
          <DialogTitle>
            <div className={classes.titleContainer}>
              <LockOutlinedIcon className={classes.titleIcon} />
              {title}
            </div>
          </DialogTitle>
          <DialogContent>
            <TextField
              label="User Identifier"
              variant="outlined"
              fullWidth
              value={userIdentifier}
              onChange={(e) => setUserIdentifier(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
          </DialogContent>
          <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
            fullWidth
          >
            Bejelentkezés
          </Button>
          
          <Button
            onClick={handleLogin}
            variant="contained"
            color="inherit"
            style={{"marginTop": "5px", "fontSize": "12px"}}
            fullWidth
          >
            elfelejtett jelszó
          </Button>
        </>
      )}
    </Dialog>
  );
};

export default LogInDialog;
