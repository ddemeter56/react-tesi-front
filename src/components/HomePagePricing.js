import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: '12px',
  }
}));

const tiers = [
  {
    id: 'pro',
    title: 'Professional',
    price: '3000',
    description: ['Personalize your page', 'Built in appointment handler', 'Specializations center access', 'Email support'],
    buttonText: 'Register me',
    buttonVariant: 'outlined',
  },
  {
    id: 'gymAndPro',
    title: 'GYM & Professionals',
    subheader: 'Most popular',
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
    title: 'Gym',
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

const HomePagePricing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h4" style={{ textAlign: "center", paddingBottom: 15}}>
        Let people find You!
      </Typography>
      <Typography variant="h6" color="textSecondary" style={{ textAlign: "center", paddingBottom: 25 }} >
        Your personal page will be easily reachable through your link or via our built in search engine.
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} sm={tier.id === 'gymAndPro' ? 12 : 6} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                className={classes.cardHeader}
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