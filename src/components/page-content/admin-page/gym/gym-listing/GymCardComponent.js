import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { Edit } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    margin: "15px",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mediaContainer: {
    width: '30%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '200px',
    },
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    padding: 7,
  },
  mediaButton: {
    position: 'absolute',
    bottom: 7,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '0.8rem',
    padding: '3px 8px',
  },
  content: {
    width: '70%',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginTop: 30,
    },
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      display: 'block',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  editButton: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      float: 'right',
    }
  },
}));

const ResponsiveCard = ({
  imageUrl,
  title,
  description,
  button1Text,
  button1OnClick,
  button2Text,
  button2OnClick,
  onEditClick,
  onMediaUpdateClick
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.mediaContainer}>
        <CardMedia className={classes.media} component="img" image={imageUrl} title={title} />
        <Button className={classes.mediaButton} variant="outlined" color="secondary" onClick={onMediaUpdateClick}>
          Manage images
        </Button>
      </Box>
      <CardContent className={classes.content}>
        <Box className={classes.editButton}>
          <Button onClick={onEditClick}>
            <Edit />
          </Button>
        </Box>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p" className={classes.description}>
          {description}
        </Typography>
        <div className={classes.buttonContainer}>
          <Button className={classes.buttonMargin} variant="outlined" onClick={button1OnClick}>
            {button1Text}
          </Button>
          <Button className={classes.buttonMargin} variant="outlined" onClick={button2OnClick}>
            {button2Text}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { ResponsiveCard };
