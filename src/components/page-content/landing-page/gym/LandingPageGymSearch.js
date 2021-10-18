import { forwardRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/lab/Autocomplete';
import Collapse from '@mui/material/Collapse';
import { useHistory } from 'react-router-dom';
import { encodeQueryData, encodeMultipleQueryData } from '../../../../utils/urlQuery';

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: "center",
    paddingTop: "5px"
  },
  timePicker: {
    marginLeft: '6px',
    marginRight: '6px',
    width: 203,
  },
  oneLineInput: {
    maxWidth: 420,
    width: "85%"
  },
  inputGrid: {
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      margin: 30
    }
  }
}));


const HomePageGymSearch = () => {
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
    history.push(`/list/gym/${encodeQueryData(formValues)}${encodeMultipleQueryData(selectedFacilities,"facilityCodes")}`);
  }


  return (
    <>
      <Grid container style={{ paddingTop: "15px", paddingLeft: "15px" }} justifyContent="center" alignContent="center" alignItems="center" spacing={4}>
        <Grid item className={classes.inputGrid} lg={12} md={12} sm={12} xs={12}>
          <TextField 
            className={classes.oneLineInput} 
            name="city" value={formValues.city} 
            onChange={handleFormValuesChange} 
            id="city" 
            label="Város" 
            variant="outlined" 
            size="small" />
        </Grid>
        <Grid item className={classes.inputGrid} lg={12} md={12} sm={12} xs={12}>
          <TextField className={classes.oneLineInput} name="country" value={formValues.country} onChange={handleFormValuesChange} id="outlined-basic" label="Ország" variant="outlined" size="small" />
        </Grid>
        <Grid item className={classes.inputGrid} xl={12} lg={12} md={12} sm={12}>
          <TextField 
            className={classes.timePicker}
            name="minPrice" 
            value={formValues.minPrice} 
            onChange={handleFormValuesChange} 
            type="number" 
            style={ {padding: 8 }} 
            id="min-price" label="Ár -tól" 
            variant="outlined" size="small" />
          <TextField 
            className={classes.timePicker}
            name="maxPrice" 
            value={formValues.maxPrice} 
            onChange={handleFormValuesChange} 
            type="number" 
            style={{ padding: 8 }} 
            id="max-price" 
            label="Ár -ig" 
            variant="outlined" 
            size="small" />
        </Grid>
        <Grid item className={classes.inputGrid} lg={12} md={12} sm={12} xs={12}>
          <Autocomplete
            multiple
            className={classes.oneLineInput}
            style={{ margin: "0 auto"}}
            id="tags-standard"
            options={facilityList}
            getOptionLabel={(option) => option.name}
            onChange={handleFacilitySelect}
            value={selectedFacilities}
            limitTags={3}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.oneLineInput}
                variant="standard"
                label="Létesítmények"
                size="small"
              />
            )}
          />
        </Grid>
        <Grid className={classes.inputGrid} item xl={12} lg={12} md={12} sm={12}>
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
            style={{ padding: 8 }}
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
            style={{ padding: 8 }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item className={classes.button} xs={12} sm={12} lg={4}>
          <Button onClick={submitForm} style={{ width: 150 }} variant="contained" color="primary" size="large">
            Keresés
          </Button>
        </Grid>
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