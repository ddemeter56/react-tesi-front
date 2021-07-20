import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
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
      <Typography variant="h4" style={{ textAlign: "center"}}>
        Let people find You!
      </Typography>
      <Typography variant="h6" color="textSecondary" style={{ textAlign: "center", paddingBottom: 15 }} >
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