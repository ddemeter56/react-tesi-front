import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const AdminBoxMetrics = ({title, description, numbers }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" color="secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4">
        {numbers}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {description}
      </Typography>
    </React.Fragment>
  );
}

export default AdminBoxMetrics;