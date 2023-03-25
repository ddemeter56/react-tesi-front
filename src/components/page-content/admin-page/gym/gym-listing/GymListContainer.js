import React from 'react';
import { makeStyles } from '@mui/styles';
import { ResponsiveCard } from './GymCardComponent';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { SkeletonGymAdminPageCard } from '../../../../commons/skeleton/SkeletonGymAdminPageCard';

const useStyles = makeStyles((theme) => ({
}));

const GymListContainer = ({ gymList, isGymLoading }) => {
  console.log(gymList)
  const imageUrl = 'https://source.unsplash.com/random';
  const title = 'Example Card';
  const description =
    'This is an example card. It has some text in the middle and two buttons under the text. some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h has some text in the middle and two buttons under the text has some text in the middle and two buttons under the text This is an example card. It has some text in the middle and two buttons under the text.';
  const button1Text = 'Button 1';
  const button1OnClick = () => alert('Button 1 clicked');
  const button2Text = 'Button 2';
  const button2OnClick = () => alert('Button 2 clicked');
  const classes = useStyles();

  if (isGymLoading) {
    <SkeletonGymAdminPageCard />
  }
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Your GYM's ({gymList?.count})
      </Typography>
      <div style={{ height: '400px', overflow: 'scroll', overflowX: 'hidden', boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        {isGymLoading ?
          [0, 1, 2, 3].map(index =>
            <SkeletonGymAdminPageCard />
          ) :
          gymList?.gyms.map((gymItem) =>
            <ResponsiveCard
              imageUrl="https://picsum.photos/300/200"
              title={gymItem.addressString}
              description={gymItem.shortDescription}
              button1Text="Trainers"
              button1OnClick={() => console.log(gymItem.referenceCode)}
              button2Text="Access management"
              button2OnClick={() => console.log(gymItem.id)}
              onEditClick={() => console.log(gymItem.id)}
            />
          )}
      </div>
    </>
  );
};

export default GymListContainer;
