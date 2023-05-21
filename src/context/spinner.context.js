import React, { createContext, useState } from 'react';
import Spinner from '../components/commons/spinner/Spinner';
// Create the spinner context
export const SpinnerContext = createContext();

// Create a spinner provider component
export const SpinnerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      { loading && <Spinner />}
      {children}
    </SpinnerContext.Provider>
  );
};
