import React, { useEffect, useState } from 'react';
import RegisterPageContainer from '../../../commons/register/RegisterPageContainer';
import { fetchData } from '../../../../utils/urlQuery';
import { redirectToLogin } from '../../../../utils/auth';
import ErrorPage from '../../../commons/error/ErrorPage';
import SkeletonEntityPage from '../../../commons/skeleton/SkeletonEntityPage';
import { useFetch } from '../../../../hooks/useFetch';
import { API_PATH, PUBLIC_API_PATH } from '../../../../utils/apiPaths';
import { GYM_BASIC_INFORMATION, GYM_OPENING_INFORMATION, GYM_PRICING_INFORMATION} from '../../../../constant-data/register-page-gym';
import { GymRegisterProvider } from '../../../../context/gym-register.context';

const GymRegisterPage = ({userDetails}) => {
  console.log(userDetails);
  const { loading, data, error } = useFetch(`${API_PATH.FACILITY_CODES}`, null, true);
  const [ responseData, setResponseData ] = useState({});
  useEffect(() => {
    console.log(responseData)
    if(!userDetails.isLoggedIn) {
      console.log('ADMIN PAGE USER NOT LOGGED IN')
      redirectToLogin();
    } else {
      fetchData('/user-management/role-check', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userDetails.token}` 
        }
      })
        .then(data => {
          console.log(data);
          setResponseData(data);
        })
        .catch((error) => {
          console.log(error)
          setResponseData(JSON.stringify(error))
        }); 

    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.isLoggedIn, setResponseData, userDetails.token]);

  if(!userDetails.isLoggedIn) {
    return <ErrorPage type="Unauthorized" message="You have to log in to reach this page"/>
  }
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
    { label: "Basic informations", optional: false, identifier: "GYM_BASIC_INFORMATION", data: GYM_BASIC_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "gym", reducer: "ADD_GYM_GENERAL"} },
    { label: "Facilities", optional: false, identifier: "GYM_FACILITY_INFORMATION", data: data.facilities, type: "SelectorAndDetails", selectorTitle: "Facilities", stateIdentifier: { state: "facilities", reducer: "ADD_GYM_FACILITIES"} },
    { label: "Pricing", optional: false, identifier: "GYM_PRICING_INFORMATION", data: GYM_PRICING_INFORMATION, type: "InputsWithTable", selectorTitle: "gymPricing", stateIdentifier: { state: "gymPricing", reducer: "ADD_GYM_PRICING"}},
    { label: "Opening", optional: false, identifier: "GYM_OPENING_INFORMATION", data: GYM_OPENING_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "gymOpening", reducer: "ADD_GYM_OPENING"} },
  ]

  return (
    <GymRegisterProvider>
      <RegisterPageContainer type="gym" steps={steps} />
    </GymRegisterProvider>
  )
}

export default GymRegisterPage;