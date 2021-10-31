import React from 'react';
import Stepper from '../stepper/Stepper';

const RegisterPageContainer = ({ type, formData, steps, onSubmit }) => {
  return (
    <Stepper steps={steps}> 
    </Stepper>
  );
}

export default RegisterPageContainer;