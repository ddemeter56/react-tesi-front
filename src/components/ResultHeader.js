
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SortIcon from '@mui/icons-material/Sort';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

const ResultHeader = ({paginationComponent, found, handleSortProp, handleSortMethod }) => {
  console.log(found);
  // use these params to make api call later
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElAsc, setAnchorElAsc] = useState(null);

  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleAscClick = (event) => {
    setAnchorElAsc(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorElSort(null);
    setAnchorElAsc(null);
  };

  return (
    <Grid container
      spacing={0}
      direction="row"
      alignItems="center"
      alignContent="center"
      justify="space-around"
      style={{ textAlign: "center" }}>
      <Grid item>
        <Typography variant="subtitle2">
          Találatok száma: {found}
        </Typography>
      </Grid>
      <Grid item  style={{ padding: 30}}> 
        {paginationComponent}
      </Grid>
      <Grid item>
        <Button startIcon={<SortIcon />} endIcon={<ExpandMore />} style={{color: "rgb(45, 55, 72)"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleSortClick}>
            Rendezés
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorElSort}
          keepMounted
          open={Boolean(anchorElSort)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSortProp('avaragePrice')}>Ár</MenuItem>
          <MenuItem onClick={() => handleSortProp('name')}>Név</MenuItem>
          <MenuItem onClick={() => {console.log('asd')}}>Nyitvatartás</MenuItem>
          <MenuItem onClick={() => {console.log('asd')}}>Legközelebbi</MenuItem>
        </Menu>
        <Button style={{color: "rgb(45, 55, 72)"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleAscClick}>
          <SwapVertIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorElAsc}
          keepMounted
          open={Boolean(anchorElAsc)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSortMethod('ASC')}>Növekvő</MenuItem>
          <MenuItem onClick={() => handleSortMethod('DESC')}>Csökkenő</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}

export default ResultHeader;