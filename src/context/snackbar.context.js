import React, { createContext, useState } from 'react';

const SnackbarContext = createContext();

function SnackbarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const handleSnackbar = (message, severity = 'info') => {
    console.log('HANDLE SNACKBAR');
    setOpen(true);
    setMessage(message);
    setSeverity(severity);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contextValue = {
    open,
    message,
    severity,
    handleSnackbar,
    handleClose,
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  );
}

export { SnackbarContext, SnackbarProvider };
