import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Tooltip from '@material-ui/core/Tooltip';
import HomePageGymSearch from './HomePageGymSearch';
import HomePagePtSearch from './HomePagePtSearch';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


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
    <Container fixed style={{ minHeight: 380 }}>
      <FormControl size="small" fullWidth component="fieldset">
        <div style={{ position: "relative" }}>
          <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
            <Grid item>
              <FormLabel color="secondary" component="legend">Keresés a következőre:</FormLabel>
            </Grid>
            <Grid item>
              <RadioGroup row aria-label="searchSelector" name="searchSelector" value={searchTypeValue} onChange={handleChangeSearchChange}>
                <FormControlLabel value="gym" control={<Radio />} label="Terem" />
                <FormControlLabel value="trainer" control={<Radio />} label="Edző" />
              </RadioGroup>
            </Grid> 
          </Grid>
        </div>
      </FormControl>
      
      <Divider style={{ marginBottom: 15}}/>
      <Grid container justify="center" alignContent="center" alignItems="center" spacing={2}>
        {renderForm(searchTypeValue, isDetailOpen)}
        <Tooltip title="Részletes kereső" aria-label="detailed-search"> 
          <IconButton label="" style={{ textAlign: "center" }} aria-label="delete" onClick={handleDetailOpen}>
            {isDetailOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            <div style={{fontSize: 15}}>
              Részletes kereső
            </div>
          </IconButton>
        </Tooltip>
      </Grid>
      <Typography style={{ paddingTop: 15, textAlign: "center", color: "#797979" }} variant="body2" display="block" gutterBottom>
        Keresd az egyes specializációk és létesítmények leírását <a href="asd">itt</a>
      </Typography>
      
    </Container>
  )
}

export default HomeSearchBar;

