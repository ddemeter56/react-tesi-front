import React from 'react';
import HorizontalLinearStepper from '../stepper/HorizontalLinearStepper';

const RegisterPageContainer = ({ type, formData, steps, onSubmit }) => {
  console.log(steps);
  return (
    <HorizontalLinearStepper steps={steps}> 
    </HorizontalLinearStepper>
  );
}

export default RegisterPageContainer;