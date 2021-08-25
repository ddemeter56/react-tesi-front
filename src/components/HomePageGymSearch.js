import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from 'react-router-dom';
import { encodeQueryData, encodeMultipleQueryData } from '../utils/urlQuery';

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.between('xs', 'lg')] : {
      textAlign: "center"
    }
  },
  timePicker: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  oneLineInput: {
    [theme.breakpoints.between('xs', 'md')] : {
      width: 200
    },
    [theme.breakpoints.up('md')]: {
      width: 420
    }
  }
}));


const HomePageGymSearch = (isDetailed) => {
  const history = useHistory();
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    city: '',
    minPrice: undefined,
    maxPrice: undefined,
    openFrom: "06:30",
    openTo: "21:30",
    country: 'Magyarország',
  })

  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleFormValuesChange = (event) => {
    const value = event.target.value;
    console.log(event.target.name);
    setFormValues({
      ...formValues, 
      [event.target.name]: value
    })
  }

  const handleFacilitySelect = (obj, value, reason) => {
    setSelectedFacilities(value);
  }



  const submitForm = (event) => {
    event.preventDefault();
    console.log(formValues);
    console.log(encodeMultipleQueryData(selectedFacilities));
    history.push(`/list/gym/${encodeQueryData(formValues)}${encodeMultipleQueryData(selectedFacilities,"facilitiesCodes")}`);
  }

  const renderDetails = (isDetailed) => {
    if(isDetailed.isDetailed) {
      return (
        <Grid container style={{ paddingTop: 10}} justify="center" alignContent="center" alignItems="center" spacing={2}> 
          <Grid item lg={12} style={{ textAlign: "center", paddingTop: 15 }}>
            <TextField className={classes.oneLineInput} name="country" value={formValues.country} onChange={handleFormValuesChange} id="outlined-basic" label="Ország" variant="outlined" size="small" />
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Autocomplete
              className={classes.oneLineInput}
              multiple
              id="tags-standard"
              options={facilityList}
              getOptionLabel={(option) => option.name}
              onChange={handleFacilitySelect}
              value={selectedFacilities}
              limitTags={3}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Létesítmények"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} style={{ textAlign: "center" }}>
            <TextField
              id="time"
              name="openFrom"
              label="Nyitvatartás -tól"
              type="time"
              defaultValue={formValues.openFrom}
              className={classes.timePicker}
              onChange={handleFormValuesChange}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width:200 }}
            />
            <TextField
              id="time"
              name="openTo"
              label="Nyitvatartás -ig"
              type="time"
              defaultValue={formValues.openTo}
              className={classes.timePicker}  
              onChange={handleFormValuesChange}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width:200 }}
            />
          </Grid>
        </Grid>
      )
    }
  }

  return (
    <>
      <Grid item>
        <TextField name="city" value={formValues.city} onChange={handleFormValuesChange} id="city" label="Város" variant="outlined" size="small" style={{ width: 200 }} />
      </Grid>
      <Grid item>
        <TextField name="minPrice" value={formValues.minPrice} onChange={handleFormValuesChange} type="number" style={{ width: 100, paddingRight: 5 }} id="min-price" label="Ár -tól" variant="outlined" size="small" />
        <TextField name="maxPrice" value={formValues.maxPrice} onChange={handleFormValuesChange} type="number" style={{ width: 100 }} id="max-price" label="Ár -ig" variant="outlined" size="small" />
      </Grid>
      <Grid>
        <Collapse in={isDetailed.isDetailed} timeout="auto" unmountOnExit >   
          {
            renderDetails(isDetailed)
          }
        </Collapse>
      </Grid>
      <Grid item className={classes.button} xs={12} sm={12} lg={4}>
        <Button onClick={submitForm} style={{width: 150 }} variant="contained" color="primary" size="large">
          Keresés
        </Button>
      </Grid>
    </>
  )
}

export default HomePageGymSearch;

const facilityList = [
  {
    "code": 2,
    "name": "Cardio zone",
    "type": "Cardio zone"
  },
  {
    "code": 3,
    "name": "Cycling studio",
    "type": "Cardio zone"
  },
  {
    "code": 4,
    "name": "Beat",
    "type": "Cardio zone"
  },
  {
    "code": 5,
    "name": "Indoor running track",
    "type": "Cardio zone"
  },
  {
    "code": 6,
    "name": "Gym zone",
    "type": "Gym zone"
  },
  {
    "code": 7,
    "name": "Free weights area",
    "type": "Gym zone"
  },
  {
    "code": 8,
    "name": "Weight lifting",
    "type": "Gym zone"
  },
  {
    "code": 9,
    "name": "Strength area",
    "type": "Gym zone"
  },
  {
    "code": 10,
    "name": "Skill and Functional Zone",
    "type": "Skill and Functional Zone"
  },
  {
    "code": 11,
    "name": "Functional Area",
    "type": "Skill and Functional Zone"
  },
  {
    "code": 12,
    "name": "Playground",
    "type": "Skill and Functional Zone"
  },
  {
    "code": 13,
    "name": "Crossfit",
    "type": "Skill and Functional Zone"
  },
  {
    "code": 14,
    "name": "Group exercise room",
    "type": "Group exercise room"
  },
  {
    "code": 15,
    "name": "Yoga",
    "type": "Group exercise room"
  },
  {
    "code": 16,
    "name": "Dance centers",
    "type": "Group exercise room"
  },
  {
    "code": 17,
    "name": "Pilates Centers",
    "type": "Group exercise room"
  },
  {
    "code": 18,
    "name": "Aerobic Centers",
    "type": "Group exercise room"
  },
  {
    "code": 19,
    "name": "Structured Activities",
    "type": "Structured Activities"
  },
  {
    "code": 20,
    "name": "Squash",
    "type": "Structured Activities"
  },
  {
    "code": 21,
    "name": "Climbing wall",
    "type": "Structured Activities"
  },
  {
    "code": 22,
    "name": "Associated functions",
    "type": "Associated functions"
  },
  {
    "code": 23,
    "name": "Locker Rooms",
    "type": "Associated functions"
  },
  {
    "code": 24,
    "name": "Sauna",
    "type": "Associated functions"
  },
  {
    "code": 25,
    "name": "Steam Room",
    "type": "Associated functions"
  },
  {
    "code": 26,
    "name": "Hot tub",
    "type": "Associated functions"
  },
  {
    "code": 27,
    "name": "Outdoor Activities",
    "type": "Outdoor Activities"
  },
  {
    "code": 28,
    "name": "Golf",
    "type": "Outdoor Activities"
  },
  {
    "code": 29,
    "name": "Outdoor running tack",
    "type": "Outdoor Activities"
  },
  {
    "code": 30,
    "name": "Lounge",
    "type": "Outdoor Activities"
  }
];