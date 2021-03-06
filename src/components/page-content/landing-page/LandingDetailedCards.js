import React, { useState, useRef} from 'react';
import useOnScreen from '../../../hooks/useOnScreen';
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
        <Typography variant="h5">{isShowGym ? 'Szakember vagy? ' : 'Edz??termed van?'}</Typography>
      </Button>
      <Button style={{ marginTop: 40 }} variant="text" color="secondary" onClick={() => alert('Implement redirect to about')}>
        <Typography variant="h5">R??szletesebben...</Typography>
      </Button>
      
    </>
  )
}

export default HomeDetailedCards;


const trainerCards = [
  {
    icon: <AssignmentIndIcon fontSize="large" color="primary" />,
    title: "A szem??lyes oldalad",
    description: "Egyszer??bb, mint egy weboldal. V??lj el??rhet??v?? keres??nkben, ??s oszd meg szem??lyes profilod, ahol akarod (tesi.life/EdzoVagyok)"
  },
  {
    icon: <EventIcon fontSize="large" color="primary"/>,
    title: "Id??pontok kezel??se",
    description: "Adj hozz?? szabad id??pontokat, mi pedig seg??t??nk megt??lteni a napt??rad! Vend??geid l??thatj??k, mikor vagy el??rhet?? ??s foglalhatnak edz??st!"
  },
  {
    icon: <NextPlanIcon fontSize="large" color="primary"/>,
    title: "Vend??geid edz??sterve egy helyen",
    description: "K??vesd nyomon vend??geid fejl??d??s??t, osszd meg vel??k elk??vetkezend?? edz??s??ket, ??trend??ket, vagy b??rmit, ami szerinted fontos lehet"
  }
]

const gymCards = [
  {
    icon: <WebIcon fontSize="large" color="primary"/>,
    title: "Tedd fel a termed a netre!",
    description: "Ha unod a weboldalak elk??sz??t??s??vel ??s karbantart??s??val j??r?? macer??t n??lunk a helyed. P??r kattint??s ??s friss??l az ??rlista (is)!"
  },
  {
    icon: <SettingsApplicationsIcon fontSize="large" color="primary"/>,
    title: "??gyelj a r??szletekre",
    description: "Van szauna is? Esetleg cross-fit r??szleg? Ne felejts el minden l??tes??tm??nyt hozz??adni regisztr??ci??kor, hiszen felhaszn??l??ink ezekre is kereshetnek!"
  },
  {
    icon: <AccountTreeIcon fontSize="large" color="primary"/>,
    title: "Mutasd meg az edz??id",
    description: "H??vd meg a termedben dolgoz?? edz??ket a Tesire, ??s az oldaladra l??togat??k ??ket fogj??k v??lasztani!"
  }
]

