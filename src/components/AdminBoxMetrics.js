import React from 'react';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const AdminBoxMetrics = ({title, description, numbers, link}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography component="p" variant="h4">
        {numbers}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {description}
      </Typography>
      <div>
        <Link color="primary" href={`${link}`} onClick={preventDefault}>
          Tovább 
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AdminBoxMetrics;