import React, { useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { forwardRef } from 'react';
import FileUploaderDialog from '../../../../commons/dialog/FileUploaderDialog';

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
  imgContainer: {
    paddingBottom: "60%",
    background:"#EEE",
    height:0,
    position:"relative",
    marginBottom: 15,
  },
  media: {
    width:"100%",
    height:"100%",
    display:"block",
    position:"absolute",
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
}) => {
  const classes = useStyles();
  const [fileUploadDialogOpen, setFileUploadDialogOOpen] = useState(false);


  const handleFileUploadDialogOpen = () => {
    setFileUploadDialogOOpen(true);
  };

  const handleFileUploadDialogClose = () => {
    setFileUploadDialogOOpen(false);
  };

  const handleFileUpload = (file) => {
    // call your backend API here to upload the file
    console.log(file);
  };
  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.mediaContainer}>
        <div className={classes.imgContainer}>
          <CardMedia className={classes.media} component="img" image={imageUrl} title={title}/>
        </div>
        <Button className={classes.mediaButton} variant="outlined" color="secondary" onClick={handleFileUploadDialogOpen}>
          Manage images
        </Button>
        <FileUploaderDialog open={fileUploadDialogOpen} onClose={handleFileUploadDialogClose} onFileUpload={handleFileUpload} />
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
