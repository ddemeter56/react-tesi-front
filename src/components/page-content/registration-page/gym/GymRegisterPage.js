import React from 'react';
import RegisterPageContainer from '../../../commons/register/RegisterPageContainer';
import ErrorPage from '../../../commons/error/ErrorPage';
import SkeletonEntityPage from '../../../commons/skeleton/SkeletonEntityPage';
import { useFetch } from '../../../../hooks/useFetch';
import { API_PATH } from '../../../../utils/apiPaths';
import { GYM_BASIC_INFORMATION, GYM_OPENING_INFORMATION } from '../../../../constant-data/register-page-gym';
import { Provider } from '../../../../context/register.context';

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
    { label: "Basic informations", optional: false, identifier: "GYM_BASIC_INFORMATION", data: GYM_BASIC_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "gymGeneralData", reducer: "ADD_GYM_GENERAL"} },
    { label: "Facilities", optional: false, identifier: "GYM_FACILITY_INFORMATION", data: data.facilities, type: "SelectorAndDetails", selectorTitle: "facilities", stateIdentifier: { state: "facilities", reducer: "ADD_GYM_FACILITIES"} },
    { label: "Label two", optional: false, identifier: "GYM_OPENING_INFORMATION", data: GYM_OPENING_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "opening", reducer: "ADD_GYM_OPENING"} },
  ]

  return (
    <Provider>
      <RegisterPageContainer steps={steps} />
    </Provider>
  )
}

export default GymRegisterPage;