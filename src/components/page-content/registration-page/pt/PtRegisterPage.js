import { useEffect } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { API_PATH } from "../../../../utils/apiPaths";
import ErrorPage from "../../../commons/error/ErrorPage";
import SkeletonEntityPage from "../../../commons/skeleton/SkeletonEntityPage";
import RegisterPageContainer from "../../../commons/register/RegisterPageContainer";
import { PT_GENERAL_INFORMATION, PT_PRICING_INFORMATION } from "../../../../constant-data/register-page-pt";
import { PtRegisterProvider } from '../../../../context/pt-register.context';

const PtRegisterPage = ({userDetails}) => {
  console.log(userDetails);
  const { loading , data, error } = useFetch(`${API_PATH.PT_SPECIALIZATION}`);
  const { loading: certificationFetchLoading, data: certificationFetchData, error: certificationFetchError } = useFetch(`${API_PATH.PT_CERTIFICATION}`)

  console.log(data);
  console.log(certificationFetchData);

  if (!userDetails.isLoggedIn) {
    return <ErrorPage type="Unauthorized" message="You have to log in to reach this page"></ErrorPage>
  }

  if (loading || certificationFetchLoading) {
    return (
      <SkeletonEntityPage />
    )
  }

  if (error || certificationFetchError) {
    return (
      <ErrorPage type="ERROR" message={error}></ErrorPage>
    )
  }

  const steps = [
    { label: "Basic informations", optional: false, identifier: "PT_GENERAL_INFORMATION", data: PT_GENERAL_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "gym", reducer: "ADD_GYM_GENERAL"} },
    { label: "Facilities", optional: false, identifier: "PT_SPECIALIZATION_INFORMATION", data: data.specializations, type: "SelectorAndDetails", selectorTitle: "Facilities", stateIdentifier: { state: "facilities", reducer: "ADD_GYM_FACILITIES"} },
    { label: "Pricing", optional: false, identifier: "PT_CERTIFICATION_INFORMATION", data: certificationFetchData.certifications, type: "InputsWithTable", selectorTitle: "gymPricing", stateIdentifier: { state: "gymPricing", reducer: "ADD_GYM_PRICING"}},
    { label: "Opening", optional: false, identifier: "PT_PRICING_INFORMATION", data: PT_PRICING_INFORMATION, type: "FormGenerator", stateIdentifier: { state: "gymOpening", reducer: "ADD_GYM_OPENING"} },
  ]

  // Wrap it in provider
  return (
    <PtRegisterProvider>
      <RegisterPageContainer type="trainer" steps={steps}/>
    </PtRegisterProvider>
  )
}

export default PtRegisterPage;