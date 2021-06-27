import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function LanguageSelector() {

  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key'); // -> same as i18next.t
    });
  }

  return(
    <div>
      <Button startIcon={<LanguageIcon />} endIcon={<ExpandMore />} style={{color: "rgb(45, 55, 72)"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {i18next.language}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage('hu')}>Magyar</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
      </Menu>
    </div>
  )
}

