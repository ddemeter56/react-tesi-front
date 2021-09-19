
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import RegisterListItems from './RegisterListItems';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LanguageSelector from './LanguageSelector';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBarItems(anchor) {
  
  const { t } = useTranslation();
  const classes = useStyles();
  
  return(
    <>
      <RegisterListItems />
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
      >
        <Divider />
        <List style={{ width: "100%"}}>
          {[{ name: t('about'), to: "/about", icon: <InfoIcon /> }, { name: t('contact'), to: "/contact", icon: <InboxIcon /> }].map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link to={item.to} style={{ textDecoration: 'none', width: "100%", height: "100%"}}>{item.name}</Link>
            </ListItem>
          ))}
        </List>
        <List style={{ position: "absolute", bottom: 0, width: "100%"}}>
          <ListItem>
            <LanguageSelector />
          </ListItem>
        </List>
      </div>
    </>
  )
}