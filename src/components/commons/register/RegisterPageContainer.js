import React from 'react';
import HorizontalLinearStepper from '../stepper/HorizontalLinearStepper';

const RegisterPageContainer = ({ type, formData, steps, onSubmit }) => {
  console.log(steps);
  console.log(type);

  // PICK OF FROM HERE 
  // RENAME HorizontalLinearStepper -> GymHorizontalLinearStepper
  // CREATE PtHorizontalLinearStepper based on GymHorizontalLinearStepper 
  if(type === "trainer") return <h1 style={{ paddingTop: 50}}>bobakrome gec</h1>
  if(type === "gym") {
    return (
      <HorizontalLinearStepper steps={steps}> 
      </HorizontalLinearStepper>
    ); 
  }
}

export default RegisterPageContainer;