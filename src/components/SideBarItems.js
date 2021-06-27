
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import RegisterListItems from './RegisterListItems';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
        <List>
          {[{ name: t('about'), to: "/about", icon: <InfoIcon /> }, { name: t('contact'), to: "/contact", icon: <InboxIcon /> }].map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link to={item.to} style={{ textDecoration: 'none', width: "100%", height: "100%"}}>{item.name}</Link>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}