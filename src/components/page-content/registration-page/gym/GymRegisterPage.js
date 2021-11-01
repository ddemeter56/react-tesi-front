import React from 'react';
import RegisterPageContainer from '../../../commons/register/RegisterPageContainer';
import { GYM_BASIC_INFORMATION, GYM_OPENING_INFORMATION } from '../../../../constant-data/register-page-gym';

const GymRegisterPage = () => {
  
  const steps = [
    { label: "Label one", optional: false, identifier: "GYM_BASIC_INFORMATION", data: GYM_BASIC_INFORMATION },
    { label: "Label two", optional: false, identifier: "GYM_OPENING_INFORMATION", data: GYM_OPENING_INFORMATION },
    { label: "Label three", optional: false, data: [{vmi : 3}] }
  ]

  return (
    <RegisterPageContainer steps={steps} />
  )
}

export default GymRegisterPage;