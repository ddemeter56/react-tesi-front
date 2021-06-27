
import { useState } from 'react';
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

export default function RegisterListItems() {

  const { t } = useTranslation();

  const [registerOpen, setRegisterOpen] = useState(false);

  const handleRegisterOpen = () => {
    setRegisterOpen(!registerOpen);
  }
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
          <ListItem button>
            <Link style={{ textDecoration: 'none', width: "100%", height: "100%"}} to="/register/gym">
              {t('registerGYM')}
            </Link>
          </ListItem>
          <ListItem button>
            <Link style={{ textDecoration: 'none', width: "100%", height: "100%"}} to="/register/professional">
              {t('registerPt')}
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}