import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { Edit } from '@mui/icons-material';
import AuthContext from '../../../../../context/auth.context';
import { SnackbarContext } from '../../../../../context/snackbar.context';
import { SpinnerContext } from '../../../../../context/spinner.context';
import FileUploaderDialog from '../../../../commons/dialog/FileUploaderDialog';
import AccessManagementDialog from '../../../../commons/dialog/AccessManagementDialog';
import { fetchData } from '../../../../../utils/urlQuery';
import { HTTP_SUCCESS_CODES } from '../../../../../utils/httpCodes';

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
    background: "#EEE",
    height: 0,
    position: "relative",
    marginBottom: 15,
  },
  media: {
    width: "100%",
    height: "100%",
    display: "block",
    position: "absolute",
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

const GymAdminCard = ({
  id,
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
  const [fileUploadDialogOpen, setFileUploadDialogOpen] = useState(false);
  const [accessManagementDialogOpen, setAccessManagementDialogOpen] = useState(false);

  const { userDetails } = useContext(AuthContext);
  const { handleSnackbar } = useContext(SnackbarContext);
  const { setLoading } = useContext(SpinnerContext)

  const handleAccessManagementDialogOpen = () => {
    setAccessManagementDialogOpen(true);
  };

  const handleAccessManagementDialogClose = () => {
    setAccessManagementDialogOpen(false);
  };

  const handleFileUploadDialogOpen = () => {
    setFileUploadDialogOpen(true);
  };

  const handleFileUploadDialogClose = () => {
    setFileUploadDialogOpen(false);
  };

  const handleFileUpload = (file, resourceType = 'gym') => {
    // call your backend API here to upload the file, can upload pics for facility as well, now just
    // handle gym pic upload, 
    // TODO: consider multi pic upload, implement facility pics upload
    console.log(file);
    setLoading(true);
    const formData = new FormData();
    formData.append("gymImage", file, "[PROXY]");

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userDetails.accessToken}`
      },
      body: formData,
      redirect: 'follow'
    };
    fetchData(`/image-manager/gym/${resourceType}/${id}`, requestOptions)
      .then(data => {
        console.log(data);
        if (HTTP_SUCCESS_CODES.includes(data.statusCode)) {
          handleSnackbar('Picture has been uploaded successfully', 'success');
        } else {
          handleSnackbar(data.message, 'error');
        }
      })
      .catch((error) => {
        console.log(error)
      });
    setLoading(false);
    handleFileUploadDialogClose();
  };

  const handleAccessManagementSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    // handleSnackbar('This is a Snackbar message', 'success');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userDetails.accessToken}`
      },
      body: JSON.stringify({ email: values.email, gymId: id })
    };

    try {
      await fetchData(`/user-invite/${'GYM_MANAGER'}`, options)
        .then(data => {
          console.log(data);
          if (HTTP_SUCCESS_CODES.includes(data.statusCode)) {
            handleSnackbar('This is a Snackbar message', 'success');
          } else {
            handleSnackbar(data.message, 'error');
          }
        })
    } catch (error) {
      console.log(error)
      handleSnackbar("System error, please try again later", 'error');
    }
    setLoading(false);
    handleAccessManagementDialogClose();
  };

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.mediaContainer}>
        <div className={classes.imgContainer}>
          <CardMedia className={classes.media} component="img" image={imageUrl} title={title} />
        </div>
        <Button className={classes.mediaButton} variant="outlined" color="secondary" onClick={handleFileUploadDialogOpen}>
          Manage images - GYM
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
          <Button className={classes.buttonMargin} variant="outlined" onClick={() => handleSnackbar('This is a Snackbar message', 'success')}>
            {button1Text}
          </Button>
          <Button className={classes.buttonMargin} variant="outlined" onClick={handleAccessManagementDialogOpen}>
            Access management!
          </Button>
          <AccessManagementDialog open={accessManagementDialogOpen} onClose={handleAccessManagementDialogClose} onTextValueSubmit={handleAccessManagementSubmit} />
        </div>
      </CardContent>
    </Card>
  );
};

export { GymAdminCard };
