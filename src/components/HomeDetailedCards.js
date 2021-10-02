import React, { useState, useRef} from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import WebIcon from '@mui/icons-material/Web';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Grow from '@mui/material/Grow';

const useStyles = makeStyles((theme) => ({
  detailedCard: {
    width: 300,
    minHeight: 285,
    opacity: 0,
    textAlign: "center",
    margin: 15,
  },
  iconContainer: {
    maxWidth: 55,
    height: 55,
    borderRadius: 35,
  },
  icon: {
    height: 55,
    width: 55
  },
}));

const DetailedCard = ({ icon, title, description, timeout }) => {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref, timeout)

  return (
    <Grid container ref={ref} className={`${classes.detailedCard} ${isVisible && 'animated animatedFadeInUp fadeInUp'}`} direction="column" justifyContent="center" alignItems="center" spacing={1}>
      <Grid container className={`${classes.iconContainer} background-fancy`} justifyContent="center" alignItems="center" alignContent="center">
        {icon}
      </Grid>
      <Grid item>
        <Typography inline variant="h5" fontFamily="titilliumBlack">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography inline variant="subtitle1" style={{ textAlign: "center", padding: 15 }} >{description}</Typography>
      </Grid>
    </Grid>
  )
}

const HomeDetailedCards = () => {
  const [ isShowGym, setIsShowGym ] = useState(false);

  return (
    <>
      <Grid container direction="row" alignItems="center" alignContent="center" justifyContent="space-evenly">
        {
          isShowGym ?
            gymCards.map((item, index) => {
              return ( 
                <Grow in={isShowGym}>
                  <Grid item xl={3}> 
                    <DetailedCard icon={item.icon} title={item.title} description={item.description} timeout={index * 500}/>
                  </Grid> 
                </Grow>
              )
            }) 
            :
            trainerCards.map((item, index) => {
              return ( 
                <Grid item xl={3}> 
                  <DetailedCard icon={item.icon} title={item.title} description={item.description} timeout={index * 500}/>
                </Grid> 
              )
            })
        }
      </Grid>
      
      <Button style={{ marginTop: 40 }} variant="outlined" onClick={() => setIsShowGym(!isShowGym)}>
        <Typography variant="h5">{isShowGym ? 'Szakember vagy? ' : 'Edzőtermed van?'}</Typography>
      </Button>
      <Button style={{ marginTop: 40 }} variant="text" color="secondary" onClick={() => alert('Implement redirect to about')}>
        <Typography variant="h5">Részletesebben...</Typography>
      </Button>
      
    </>
  )
}

export default HomeDetailedCards;


const trainerCards = [
  {
    icon: <AssignmentIndIcon fontSize="large" color="primary" />,
    title: "A személyes oldalad",
    description: "Egyszerűbb, mint egy weboldal. Válj elérhetővé keresőnkben, és oszd meg személyes profilod, ahol akarod (tesi.life/EdzoVagyok)"
  },
  {
    icon: <EventIcon fontSize="large" color="primary"/>,
    title: "Időpontok kezelése",
    description: "Adj hozzá szabad időpontokat, mi pedig segítünk megtölteni a naptárad! Vendégeid láthatják, mikor vagy elérhető és foglalhatnak edzést!"
  },
  {
    icon: <NextPlanIcon fontSize="large" color="primary"/>,
    title: "Vendégeid edzésterve egy helyen",
    description: "Kövesd nyomon vendégeid fejlődését, osszd meg velük elkövetkezendő edzésüket, étrendüket, vagy bármit, ami szerinted fontos lehet"
  }
]

const gymCards = [
  {
    icon: <WebIcon fontSize="large" color="primary"/>,
    title: "Tedd fel a termed a netre!",
    description: "Ha unod a weboldalak elkészítésével és karbantartásával járó macerát nálunk a helyed. Pár kattintás és frissül az árlista (is)!"
  },
  {
    icon: <SettingsApplicationsIcon fontSize="large" color="primary"/>,
    title: "Ügyelj a részletekre",
    description: "Van szauna is? Esetleg cross-fit részleg? Ne felejts el minden létesítményt hozzáadni regisztrációkor, hiszen felhasználóink ezekre is kereshetnek!"
  },
  {
    icon: <AccountTreeIcon fontSize="large" color="primary"/>,
    title: "Mutasd meg az edzőid",
    description: "Hívd meg a termedben dolgozó edzőket a Tesire, és az oldaladra látogatók őket fogják választani!"
  }
]

