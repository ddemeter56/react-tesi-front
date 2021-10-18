import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import useOnScreen from '../../../hooks/useOnScreen';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    borderBottom: "1px solid #c3c3c3",
    width: "100%",
    height: 50,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: '12px',
  }
}));

const HomePagePricing = () => {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref)

  if(isVisible) {
  }
  return (
    <Container maxWidth="xl" component="main">
      <Typography variant="h3" style={{ textAlign: "center", padding: 15}}>
        <strong>Árazás</strong>
      </Typography>
      <Typography variant="h6" color="textSecondary" style={{ textAlign: "center", paddingBottom: 25 }} >
        A szolgáltatások igénybe vétele ingyenes, ezzel is bíztatva az embereket a mozgásra. 
      </Typography>
      <Grid  ref={ref} container spacing={5} justifyContent="center" alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid className={`${classes.CardGrid} ${isVisible && 'animated animatedFadeInUp fadeInUp'}`} item key={tier.title} xs={12} sm={12} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.id === 'pro' ? <StarIcon color="primary" style={{paddingRight: 15}}/> : null}
                className={`${classes.cardHeader} background-fancy`}
                style={{ paddingTop: 15, paddingBottom: 15, paddingRight: 0, paddingLeft: 0}}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  {
                    tier.id === 'gymAndPro' && 
                    <Typography variant="h6" color="textSecondary">
                      From
                    </Typography>
                  }
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price} 
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Ft /mo
                  </Typography>
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} color="primary">
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePagePricing;

const tiers = [
  {
    id: 'pro',
    title: 'Professional',
    subheader: 'Most popular',
    price: '3000',
    description: ['Personalize your page', 'Built in appointment handler', 'Specializations center access', 'Email support'],
    buttonText: 'Register me',
    buttonVariant: 'outlined',
  },
  {
    id: 'gymAndPro',
    title: 'GYM & Professionals',
    price: '15000',
    description: [
      '5 professional users included',
      'All the benefits with Gym',
      'Comes with all funcionality for trainers',
      'Show off your trainers!',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    id: 'gym',
    title: 'GYM',
    price: '5000',
    description: [
      'Keep your page updated with ease',
      'Let people find out your facilities',
      'Help center access',
      'Link to your trainers',
      'Email support',
    ],
    buttonText: 'Register my gym',
    buttonVariant: 'outlined',
  },
];
