import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Spinner;
