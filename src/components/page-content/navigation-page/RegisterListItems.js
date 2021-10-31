
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PersonAdd from '@mui/icons-material/PersonAdd'
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import RegisterPage from '../registration-page/RegisterPage';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: '12px',
  },
  closeButton: {
    position: 'absolute',
    right: '6px',
    top: '6px',
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



export default function RegisterListItems() {
  console.log('RENDERED REGISTER LIST ITEMS');
  const { t } = useTranslation();

  const [registerOpen, setRegisterOpen] = useState(true);
  const [open, setOpen] = useState(false);
  const [registerType, setRegisterType] = useState(null);

  const handleRegisterOpen = () => {
    setRegisterOpen(!registerOpen);
  }

  const handleClickOpen = type => event => {
    console.log(type);
    setRegisterType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <ListItem button onClick={handleRegisterOpen}>
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        <ListItemText primary={t('register')} />
        {registerOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={registerOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={handleClickOpen('gym-owner')}>
            {t('registerGYM')}
          </ListItem>
          <ListItem button onClick={handleClickOpen('pt')}>
            {t('registerPt')}
          </ListItem>
          <ListItem button onClick={handleClickOpen('user')}>
            {t('userRegister')}
          </ListItem>
        </List>
      </Collapse>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      ><DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent>
          <RegisterPage type={registerType}></RegisterPage>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  )
}