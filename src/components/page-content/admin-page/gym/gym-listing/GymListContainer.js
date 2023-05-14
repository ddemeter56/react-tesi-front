import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GymAdminCard } from './GymCardComponent';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { SkeletonGymAdminPageCard } from '../../../../commons/skeleton/SkeletonGymAdminPageCard';
import ErrorPage from '../../../../commons/error/ErrorPage';

const useStyles = makeStyles((theme) => ({
  gymCardContainerWithCards: {
    height: '400px',
    overflow: 'scroll',
    overflowX: 'hidden',
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" 
  },
  gymCardContainerWithButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: '400px',
    overflow: 'none',
    overflowX: 'hidden',
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" 
  },
  gymListTopSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));

const GymListContainer = ({ gymList, isGymLoading, gymLoadError }) => {
  console.log(gymList)
  const [searchText, setSearchText] = useState('');
  const [filteredGymList, setFilteredGymList] = useState(gymList)
  const imageUrl = 'https://source.unsplash.com/random';
  const title = 'Example Card';
  const description =
    'This is an example card. It has some text in the middle and two buttons under the text. some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h has some text in the middle and two buttons under the text has some text in the middle and two buttons under the text This is an example card. It has some text in the middle and two buttons under the text.';
  const button1Text = 'Button 1';
  const button1OnClick = () => alert('Button 1 clicked');
  const button2Text = 'Button 2';
  const button2OnClick = () => alert('Button 2 clicked');
  const classes = useStyles();

  const handleGymSearchChange = (event) => {
    setSearchText(event.target.value)
    setFilteredGymList(gymList?.gyms.filter(gym => gym.addressString.includes(event.target.value)))
  } 

  const renderAdminPageOwnedGymsWhen = (isLoading, isThereAnyAddedGym, isBeingFiltered) => {
    if (isLoading) {
      console.log(isLoading)
      return (
        [0, 1, 2, 3].map(index =>
          <SkeletonGymAdminPageCard />
        ))
    } else if (!isLoading && isThereAnyAddedGym) {
      console.log('VMI GYM LESZ')
      console.log(isBeingFiltered)
      if (!isBeingFiltered) {
        console.log('ami nem filtered')
        return gymList?.gyms.map((gymItem) =>
          <GymAdminCard
            id={gymItem.id}
            imageUrl="https://picsum.photos/300/200"
            title={gymItem.addressString}
            description={gymItem.shortDescription}
            button1Text="Trainers"
            button1OnClick={() => console.log(gymItem.referenceCode)}
            onEditClick={() => console.log(gymItem.id)}
          />
        )
      } else {
        console.log('ami filtered')
        return filteredGymList?.map((gymItem) =>
          <GymAdminCard
            imageUrl="https://picsum.photos/300/200"
            title={gymItem.addressString}
            description={gymItem.shortDescription}
            button1Text="Trainers"
            button1OnClick={() => console.log(gymItem.referenceCode)}
            onEditClick={() => console.log(gymItem.id)}
          />
        )
      }
    } else if (!isLoading && !isThereAnyAddedGym && !gymLoadError) {
      return (
        <div style={{ textAlign: "center"}}>
          <Typography variant="h6">You don't have any GYMs registered</Typography>
          <Button size="large" className={`pulse`} variant="outlined" component={Link} to="/register/gym">Register your first GYM</Button>
        </div>
      )
    } else if(gymLoadError) {
      console.log(gymLoadError);
      return (
        <div style={{ textAlign: "center" }}>
          <ErrorPage type="Error" message={gymLoadError}></ErrorPage>
        </div>
      )
    }
  }

  return (
    <>
      <div className={classes.gymListTopSection}>
        <Typography gutterBottom variant="h5" component="h2">
          Your GYM's ({gymList?.count})
        </Typography>
        <Input
          id="input-with-icon-adornment"
          placeholder='Search GYM by address'
          onChange={handleGymSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <div className={!!gymList?.count ? classes.gymCardContainerWithCards : classes.gymCardContainerWithButton}>  
        {renderAdminPageOwnedGymsWhen(isGymLoading, !!gymList?.count, searchText !== '')}
      </div>
    </>
  );
};

export default GymListContainer;
