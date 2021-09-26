import React, { useState } from 'react';
import '../App.css';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tooltip from '@mui/material/Tooltip';
import HomePageGymSearch from './HomePageGymSearch';
import HomePagePtSearch from './HomePagePtSearch';
import Typography from '@mui/material/Typography';


const HomeSearchBar = () => {
  const [searchTypeValue, setValue] = useState('gym');

  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const renderForm = (type, isDetailed) => {
    if(type === 'gym') {
      return <HomePageGymSearch isDetailed={isDetailed} />
    }
    if(type === 'trainer') {
      return <HomePagePtSearch isDetailed={isDetailed} />
    }
  }
 
  const handleDetailOpen = () => {
    setIsDetailOpen(!isDetailOpen);
  }
  const handleChangeSearchChange = (event) => {
    setValue(event.target.value);
    setIsDetailOpen(true);
  };

  return(
    <div className={`home-search-bar`}>
      <FormControl size="small" fullWidth component="fieldset">
        <div style={{ position: "relative", textAlign: "center" }}>
          <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
            <Grid item>
              <FormLabel color="secondary" component="legend">Keresés a következőre:</FormLabel>
            </Grid>
            <Grid item >
              <RadioGroup row aria-label="searchSelector" name="searchSelector" value={searchTypeValue} onChange={handleChangeSearchChange}>
                <FormControlLabel value="gym" control={<Radio />} label="Terem" />
                <FormControlLabel value="trainer" control={<Radio />} label="Edző" />
              </RadioGroup>
            </Grid> 
          </Grid>
        </div>
      </FormControl>
      <Grid container justify="center" alignContent="center" alignItems="center" spacing={2}>
        {renderForm(searchTypeValue, isDetailOpen)}
        <Tooltip title="Részletes kereső" aria-label="detailed-search"> 
          <IconButton label="" style={{ textAlign: "center", margin: "0px auto" }} aria-label="delete" onClick={handleDetailOpen}>
            {isDetailOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            <div style={{fontSize: 15, textAlign: "center" }}>
              Részletes kereső
            </div>
          </IconButton>
        </Tooltip>
      </Grid>
      <Typography style={{ paddingTop: 15, textAlign: "center", color: "#797979" }} variant="body2" display="block" gutterBottom>
        Keresd az egyes specializációk és létesítmények leírását <a href="asd">itt</a>
      </Typography>
    </div>
  )
}

export default HomeSearchBar;

