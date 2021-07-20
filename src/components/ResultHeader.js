
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import Typography from '@material-ui/core/Typography';

import { useState } from 'react';

const ResultHeader = ({paginationComponent, found}) => {
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
          <MenuItem onClick={() => {console.log('asd')}}>Ár</MenuItem>
          <MenuItem onClick={() => {console.log('asd')}}>Név</MenuItem>
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
          <MenuItem onClick={() => {console.log('asd')}}>Növekvő</MenuItem>
          <MenuItem onClick={() => {console.log('asd')}}>Csökkenő</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}

export default ResultHeader;