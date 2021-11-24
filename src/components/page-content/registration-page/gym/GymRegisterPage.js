import React from 'react';
import RegisterPageContainer from '../../../commons/register/RegisterPageContainer';
import ErrorPage from '../../../commons/error/ErrorPage';
import SkeletonEntityPage from '../../../commons/skeleton/SkeletonEntityPage';
import { useFetch } from '../../../../hooks/useFetch';
import { API_PATH } from '../../../../utils/apiPaths';
import { GYM_BASIC_INFORMATION, GYM_OPENING_INFORMATION } from '../../../../constant-data/register-page-gym';

const GymRegisterPage = () => {
  const { loading, data, error } = useFetch(`${API_PATH.FACILITY_CODES}`);

  
  if(loading) {
    return(
      <SkeletonEntityPage />
    )
  }
  
  if(error) {
    return(
      <ErrorPage type="ERROR" message={error} />
    )
  }

  const steps = [
    { label: "Basic informations", optional: false, identifier: "GYM_BASIC_INFORMATION", data: GYM_BASIC_INFORMATION, type: "FormGenerator" },
    { label: "Facilities", optional: false, identifier: "GYM_FACILITY_INFORMATION", data: data.facilities, type: "SelectorAndDetails", selectorTitle: "Facilities" },
    { label: "Label two", optional: false, identifier: "GYM_OPENING_INFORMATION", data: GYM_OPENING_INFORMATION, type: "FormGenerator" },
  ]

  return (
    <RegisterPageContainer steps={steps} />
  )
}

export default GymRegisterPage;