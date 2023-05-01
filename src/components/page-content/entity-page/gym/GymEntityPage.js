import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Divider from '@mui/material/Divider';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddBoxIcon from '@mui/icons-material/AddBox';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import MapComponent from '../../../commons/map/MapComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    paddingTop: 70,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  tableContainer: {
    maxHeight: 400,
    [theme.breakpoints.between('md', 'xl')] : {
      width: "100%",
    }
  }, 
  chipContainer: {
    padding: 30
  }
}));


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const GymEntityPage = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  const [selectedPrice, setSelectedPrice] = useState('general');

  const generateLabel = (item) => {
    return item.facilityCode.code === 1 ? item.customName : item.facilityCode.name;
  }

  const handlePriceSelect = (event) => {
    setSelectedPrice(event.target.value);
  };

  const generatePriceTableRows = (array) => {
    if (array) {
      return (
        array.map((row) => (
          <TableRow key={row.ticketId}>
            <TableCell >
              {row.categoryType}
            </TableCell>
            <TableCell align="right">{row.ticketType}</TableCell>
            <TableCell align="right">{row.validForDays}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="right">{row.currency}</TableCell>
          </TableRow>
        ))
      )
    }
  }

  const generateFacilityTableRows = () => {
    // Find property (maybe ID should be used if possible)
    let foundFacilityPrice;
    
    data.facilities.map((item) => {
      if(item.facilityCode.name === selectedPrice || item.customName === selectedPrice) {
        console.log('FOUND');
        console.log(item);
        foundFacilityPrice = item;
      }
      return null;
    })

    return generatePriceTableRows(foundFacilityPrice.gymPricing);
  }

  return (
    <div className={classes.container}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Typography variant="h3" style={{ paddingRight: 15, textAlign: "center"}}>{data.name} <VerifiedUserOutlinedIcon/></Typography>
          
        <Grid item container direction="column" justify="center" alignItems="center" gap={5} >
          <Grid item>
            <Typography variant="h6" ><PlaceOutlinedIcon /> {data.addressString}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" > Mai nyitvatartás: {data.earliestOpening} - {data.latestClosing}</Typography> 
          </Grid>
          <Grid item >
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ margin: 20}}/>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Typography variant="body1" style={{padding: 20}}>{data.description}</Typography>
      </Grid>
      <Divider />

      <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{ padding: 20}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" style={{ textAlign: "center", paddingBottom: 15 }}>gymPricing &#38; Facilities</Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ height: 450 }}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedPrice}
            onChange={handlePriceSelect}
          >
            <MenuItem value="general">
              <em>Alap árlista</em>
            </MenuItem>
            {data.facilities.map((item, i) => {
              if(Array.isArray(item.gymPricing) && item.gymPricing.length > 0 ) {
                return <MenuItem key={i } value={item.facilityCode.code === 1 ? item.customName : item.facilityCode.name }>{item.facilityCode.code === 1 ? item.customName : item.facilityCode.name }</MenuItem>
              }
              return null;
            })}
          </Select>
          <TableContainer className={classes.tableContainer}>
            <Table  stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Category Type</TableCell>
                  <TableCell align="right">Ticket Type</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Currency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedPrice === 'general' ? generatePriceTableRows(data.gymPricing) : generateFacilityTableRows()}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.chipContainer}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"> 
            {data.facilities.map((item, i) => {
              return (
                <Grid item style={{ padding: 3}} key={i}>
                  <Tooltip title={item.description}>
                    <Chip label={generateLabel(item)} color="secondary" clickable deleteIcon={<AddBoxIcon />} onDelete={() =>{}}/>
                  </Tooltip>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
  
      <Divider style={{ marginBottom: 15 }} />
      <Slider {...settings}>
        {data.images.map((item) => {
          return (
            <div key={item.id}>
              <img src={`https://api.tesi.life/${item.publicAddress}`} 
                alt={item.imageType}
                style={{  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "90%"  }}/>
            </div>
          )
        })}
      </Slider>
      <Grid item style={{ paddingTop: 35}}>
        <MapComponent location={ {lat: 46.831438, lng: 16.8354945}  }/>
      </Grid>
      <Grid item>
          Bejegyzések
      </Grid>
      <Grid item>
          Vélemények  
      </Grid>
      <Grid item>
          Személyi edzők
      </Grid>
    </div>
  )
} 

export default GymEntityPage;