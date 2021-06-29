
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import DetailsIcon from '@material-ui/icons/Details';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.between('xs', 'lg')] : {
      textAlign: "center"
    }
  }
}));

const basicGymSearch = () => {
  return (
    <>
      <Grid item>
        <TextField id="outlined-basic" label="Város" variant="outlined" size="small" />
      </Grid>
      <Grid item>
        <TextField style={{ width: 100, paddingRight: 5 }} id="outlined-basic" label="Ár -tól" variant="outlined" size="small" />
        <TextField style={{ width: 100 }} id="outlined-basic" label="Ár -ig" variant="outlined" size="small" />
      </Grid>
    </>
  )
}

const basicPtSearch = () => {
  return (
    <>
      <Grid item>
        <TextField id="outlined-basic" label="Város" variant="outlined" size="small" />
      </Grid>
      <Grid item>
        <Autocomplete
          multiple
          id="tags-standard"
          options={specializations}
          getOptionLabel={(option) => option.name}
          defaultValue={[]}
          style={{width:200}}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Specializációk"
              size="small"
            />
          )}
        />
      </Grid>
    </>
  )
}

const HomeSearchBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState('gym');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
    <Container>
      <FormControl size="small" fullWidth component="fieldset">
        <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
          <Grid item>
            <FormLabel component="legend">Keresés</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="searchSelector" name="searchSelector" value={value} onChange={handleChange}>
              <FormControlLabel value="gym" control={<Radio />} label="Terem" />
              <FormControlLabel value="trainer" control={<Radio />} label="Edző" />
            </RadioGroup>
          </Grid> 
        </Grid>
      </FormControl>
      <Grid container justify="center" alignContent="center" alignItems="center" spacing={2}>
        {value === 'gym' ? basicGymSearch() : basicPtSearch()}
        <Grid item className={classes.button} xs={12} sm={12} lg={4}>
          <Button style={{width: "100%"}} variant="contained" color="primary" size="large">
            Keresés
          </Button>
        </Grid>
        <Tooltip title="Részletes kereső" aria-label="detailed-search"> 
          <IconButton style={{ textAlign: "center" }} aria-label="delete">
            <DetailsIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Container>
  )
}

export default HomeSearchBar;

// It's an API call please use: api/public/codes/specialization
const specializations = [
  {
    "code": 2,
    "name": "Weight Loss"
  },
  {
    "code": 3,
    "name": "Corrective Exercise"
  },
  {
    "code": 4,
    "name": "Mobility and Flexibility"
  },
  {
    "code": 5,
    "name": "Muscle Hypertrophy"
  },
  {
    "code": 6,
    "name": "Core Training"
  },
  {
    "code": 7,
    "name": "Athletic Performance"
  },
  {
    "code": 8,
    "name": "Functional Fitness"
  },
  {
    "code": 9,
    "name": "High Intensity Interval Training"
  },
  {
    "code": 10,
    "name": "CrossFit"
  },
  {
    "code": 11,
    "name": "Olympic Lifting"
  },
  {
    "code": 12,
    "name": "TRX Suspension Training"
  },
  {
    "code": 13,
    "name": "Strength & Conditioning"
  },
  {
    "code": 14,
    "name": "Powerlifting"
  },
  {
    "code": 15,
    "name": "Contest preparation"
  },
  {
    "code": 16,
    "name": "Strength training"
  },
  {
    "code": 17,
    "name": "Athletic strength and conditioning"
  },
  {
    "code": 18,
    "name": "Injury prevention"
  },
  {
    "code": 19,
    "name": "Race Preparation"
  },
  {
    "code": 20,
    "name": "Athletic Training"
  },
  {
    "code": 21,
    "name": "Introduction to Fitness"
  },
  {
    "code": 22,
    "name": "Compensation"
  },
  {
    "code": 23,
    "name": "Sports Conditioning"
  },
  {
    "code": 24,
    "name": "TRX Training"
  },
  {
    "code": 25,
    "name": "Athlete Strength and Conditioning"
  },
  {
    "code": 26,
    "name": "Olympic Lifting"
  },
  {
    "code": 27,
    "name": "Plyometric and Agility Training"
  },
  {
    "code": 28,
    "name": "Triphasic Training"
  },
  {
    "code": 29,
    "name": "Sand Training"
  },
  {
    "code": 30,
    "name": "Mobility Stability Training"
  },
  {
    "code": 31,
    "name": "Speed and Power Development"
  },
  {
    "code": 32,
    "name": "CrossFit"
  },
  {
    "code": 33,
    "name": "Olympic Weightlifting"
  },
  {
    "code": 34,
    "name": "Muscle Building"
  },
  {
    "code": 35,
    "name": "Weight Loss"
  },
  {
    "code": 36,
    "name": "Athletic Strength and Conditioning"
  },
  {
    "code": 37,
    "name": "Body Sculpting and Toning"
  },
  {
    "code": 38,
    "name": "Posture and mobility specialist"
  },
  {
    "code": 39,
    "name": "Parkour"
  },
  {
    "code": 40,
    "name": "Calisthenics"
  },
  {
    "code": 41,
    "name": "Seniors"
  },
  {
    "code": 42,
    "name": "Pilates"
  },
  {
    "code": 43,
    "name": "Yoga"
  },
  {
    "code": 44,
    "name": "Pre/Post Natal"
  },
  {
    "code": 45,
    "name": "Post Rehabilitative Fitness"
  },
  {
    "code": 46,
    "name": "Outdoor trail workouts"
  },
  {
    "code": 47,
    "name": "Body weight training"
  },
  {
    "code": 48,
    "name": "Wellness"
  },
  {
    "code": 49,
    "name": "Fitness for mature adults"
  },
  {
    "code": 50,
    "name": "Posture Restoration"
  },
  {
    "code": 51,
    "name": "Lower Back Restoration"
  },
  {
    "code": 52,
    "name": "Body Composition Improvement"
  }
];