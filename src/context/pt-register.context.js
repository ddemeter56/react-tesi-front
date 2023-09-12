import React from 'react';

const ptInitialState = {
  "personalTrainer": {
    "referenceCode": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": "",
    "languageCodes": [],
    "description": "",
    "shortDescription": "",
    "country": "",
    "postcode": "",
    "city": "",
    "street": "",
    "streetNum": "",
    "floor": "",
    "facebookUserId": "",
    "instagramUserId": "",
    "twitterUserId": "",
    "youtubeUserId": "",
    "webPageUserId": ""
  },
  "gymId": "",
  "specializations": [],
  "certifications": [],
  "ptPricing": []
}

const actions = {
  ADD_PT_GENERAL: "ADD_PT_GENERAL",
  ADD_PT_SPECIALIZATION: "ADD_PT_SPECIALIZATION",
  ADD_PT_CERTIFICATION: "ADD_PT_CERTIFICATION",
  ADD_PT_PRICING: "ADD_PT_PRICING"
}

const reducer = (state, action) => {
  switch (action.type) {
  case actions.ADD_PT_GENERAL:
    return {
      ...state,
      personalTrainer: {
        ...state.personalTrainer,
        [action.field]: action.payload
      }
    };
  }
}

const Context = React.createContext();

export const PtRegisterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, ptInitialState);

  const value = {
    state,
    handleFormValues: (event, type) => {
      dispatch({
        type,
        field: event.target.name,
        payload: event.target.value
      })
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Context;
