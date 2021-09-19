import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/lab/Autocomplete';
import Collapse from '@mui/material/Collapse';
import { useHistory } from 'react-router-dom';
import { encodeQueryData, encodeMultipleQueryData } from '../utils/urlQuery';
import { generateDatetimeString } from '../utils/formatDate';

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.between('xs', 'lg')] : {
      textAlign: "center"
    }
  },
  timePicker: {
    marginLeft: '6px',
    marginRight: '6px',
    width: 200,
  },
}));

const HomePagePtSearch = ({ isDetailed }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    city: '',
    minPrice: undefined,
    maxPrice: undefined,
    country: 'Magyarország',
    appointmentFrom: generateDatetimeString(),
    appointmentTo: generateDatetimeString()
  })

  const [selectedSpecializations, setSelectedSpecializations] = useState([]);


  const handleFormValuesChange = (event) => {
    const value = event.target.value;
    setFormValues({
      ...formValues, 
      [event.target.name]: value
    })
  }
  
  const handleSpecializationSelect = (obj, value, reason) => {
    setSelectedSpecializations(value);
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formValues);
    console.log(selectedSpecializations);
    history.push(`/list/pt/${encodeQueryData(formValues)}${encodeMultipleQueryData(selectedSpecializations,"facilitiesCodes")}`);
  
  }

  const Details = () => {
    if(isDetailed) {
      return(
        <Grid container style={{ paddingTop: 10}} justifyContent="center" alignContent="center" alignItems="center" spacing={1}> 
          <Grid item style={{ paddingLeft: 20}}>
            <TextField name="country" style={{ width: 200 }} value={formValues.country} onChange={handleFormValuesChange} id="country" label="Ország" variant="outlined" size="small" />
          </Grid>
          <Grid item>
            <TextField name="minPrice" value={formValues.minPrice} onChange={handleFormValuesChange} type="number" style={{ width: 100, paddingRight: 5 }} id="min-price" label="Ár -tól" variant="outlined" size="small" />
            <TextField name="maxPrice" value={formValues.maxPrice} onChange={handleFormValuesChange} type="number" style={{ width: 100 }} id="max-price" label="Ár -ig" variant="outlined" size="small" />
          </Grid>
          <Grid item xl={12} lg={12} style={{ textAlign: "center", paddingTop: 15 }}>
            <TextField
              name="appointmentFrom"
              id="datetime-local"
              label="Szabad időpont-tól"
              type="datetime-local"
              defaultValue={formValues.appointmentFrom}
              onChange={handleFormValuesChange}
              InputLabelProps={{
                shrink: true,
              }}
            />  
          </Grid>
          <Grid item>
            <TextField
              name="appointmentTo"
              id="datetime-local"
              label="Szabad időpont-ig"
              type="datetime-local"
              onChange={handleFormValuesChange}
              defaultValue={formValues.appointmentTo}
              InputLabelProps={{
                shrink: true,
              }}
            />     
          </Grid>
        </Grid>
      )
    }
    return <></>
  } 

  return (
    <Grid container style={{ paddingTop: "15px", paddingLeft: "15px" }} justifyContent="center" alignContent="center" alignItems="center" spacing={1}>
      <Grid item>
        <TextField name="city" style={{ width: 200 }} onChange={handleFormValuesChange} id="city" label="Város" variant="outlined" size="small" />
      </Grid>
      <Grid item>
        <Autocomplete
          multiple
          options={specializations}
          getOptionLabel={(option) => option.name}
          value={selectedSpecializations}
          onChange={handleSpecializationSelect}
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
      <Collapse in={isDetailed} timeout="auto" unmountOnExit >   
        <Details />
      </Collapse>
      <Grid item className={classes.button} xs={12} sm={12} lg={4}>
        <Button onClick={submitForm} style={{width: 150}} variant="contained" color="primary" size="large">
          Keresés
        </Button>
      </Grid>
    </Grid>
  )
}

export default HomePagePtSearch;


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