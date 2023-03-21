import React from 'react';
import { ResponsiveCard } from './GymCardComponent';
import { Typography } from '@mui/material';

const ExampleCard = () => {
  const imageUrl = 'https://source.unsplash.com/random';
  const title = 'Example Card';
  const description =
    'This is an example card. It has some text in the middle and two buttons under the text. some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h some text in the middle and two buttons under the text. h has some text in the middle and two buttons under the text has some text in the middle and two buttons under the text This is an example card. It has some text in the middle and two buttons under the text.';
  const button1Text = 'Button 1';
  const button1OnClick = () => alert('Button 1 clicked');
  const button2Text = 'Button 2';
  const button2OnClick = () => alert('Button 2 clicked');

  return (
    <>

      <Typography gutterBottom variant="h5" component="h2">
        Your GYM's
      </Typography>
      <div style={{ height: '400px', overflow: 'scroll', overflowX: 'hidden', boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
        <ResponsiveCard
          imageUrl="https://picsum.photos/300/200"
          title="Sample Card Title but longer longer longer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nibh dolor. Nam malesuada placerat mauris a ullamcorper."
          button1Text="Button 1"
          button1OnClick={() => console.log('Button 1 clicked!')}
          button2Text="Button 2"
          button2OnClick={() => console.log('Button 2 clicked!')}
        />
        <ResponsiveCard
          imageUrl="https://picsum.photos/300/200"
          title="Another Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nibh dolor. Nam malesuada placerat mauris a ullamcorper."
          button1Text="Button 1"
          button1OnClick={() => console.log('Button 1 clicked!')}
          button2Text="Button 2"
          button2OnClick={() => console.log('Button 2 clicked!')}
        />

        <ResponsiveCard
          imageUrl="https://picsum.photos/300/200"
          title="Another Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nibh dolor. Nam malesuada placerat mauris a ullamcorper."
          button1Text="Button 1"
          button1OnClick={() => console.log('Button 1 clicked!')}
          button2Text="Button 2"
          button2OnClick={() => console.log('Button 2 clicked!')}
        />

        <ResponsiveCard
          imageUrl="https://picsum.photos/300/200"
          title="Another Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nibh dolor. Nam malesuada placerat mauris a ullamcorper."
          button1Text="Button 1"
          button1OnClick={() => console.log('Button 1 clicked!')}
          button2Text="Button 2"
          button2OnClick={() => console.log('Button 2 clicked!')}
        />
      </div>
    </>
  );
};

export default ExampleCard;
