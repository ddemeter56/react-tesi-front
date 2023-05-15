import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarContext } from '../../../context/snackbar.context'

function GlobalSnackbar() {
  const { open, message, severity, handleClose } = useContext(SnackbarContext);

  console.log(SnackbarContext)
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default GlobalSnackbar;
