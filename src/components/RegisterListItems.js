
import { useState, useCallback } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import RegisterPage from './RegisterPage';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
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