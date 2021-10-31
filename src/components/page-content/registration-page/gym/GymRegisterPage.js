import React from 'react';
import RegisterPageContainer from '../../../commons/register/RegisterPageContainer';

const GymRegisterPage = () => {
  
  const steps = [
    { label: "Label one", optional: false },
    { label: "Label two", optional: false },
    { label: "Label three", optional: false }
  ]

  return (
    <RegisterPageContainer steps/>
  )
}

export default GymRegisterPage;