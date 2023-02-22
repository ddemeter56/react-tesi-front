import React from 'react';

const gymInitialState = {
  gymGeneralData: {
    referenceCode: "",
    name: "",
    country: "",
    postcode: "",
    city: "",
    street: "",
    streetNum: "",
    floor: "",
    phoneNumber: "",
    description: "",
    shortDescription: "",
    facebookUserId: "",
    instagramUserId: "",
    youtubeUserId: "",
    twitterUserId: "",
    webPageUserId: ""
  },
  facilities: [],
  pricing: [],
  opening: {
    mondayFrom: "",
    mondayTo: "",
    tuesdayFrom: "",
    tuesdayTo: "",
    wednesdayFrom: "",
    wednesdayTo: "",
    thursdayFrom: "",
    thursdayTo: "",
    fridayFrom: "",
    fridayTo: "",
    saturdayFrom: "",
    saturdayTo: "",
    sundayFrom: "",
    sundayTo: ""
  },
}

const actions = {
  ADD_GYM_GENERAL: "ADD_GYM_GENERAL",
  ADD_GYM_FACILITIES: "ADD_GYM_FACILITIES",
  ADD_GYM_OPENING: "ADD_GYM_OPENING",
  ADD_GYM_PRICING: "ADD_GYM_PRICING"
}

const reducer = (state, action) => {
  console.log(action)
  console.log(state)
  switch(action.type) {
  
  case actions.ADD_GYM_GENERAL:
    return {
      ...state,
      gymGeneralData: {
        ...state.gymGeneralData,
        [action.field]: action.payload
      }
    };
  case actions.ADD_GYM_OPENING: 
    return {
      ...state,
      opening:{
        ...state.opening,
        [action.field]: action.payload
      }
    };
  case actions.ADD_GYM_FACILITIES:
    return {
      ...state,
      facilities: [
        ...action.selectedArray
        // ez müxik igy? Nem kell action.field minmt fent?
      ]
    };
  case actions.ADD_GYM_PRICING:
    return {
      ...state,
      pricing: [ 
        ...action.priceArray
        // Only keep the added values.
      ]
    }
  default: return state;
  }
}

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(reducer, gymInitialState );

  const value = {
    state,
    handleFormValues: (event, type) => {
      dispatch({
        type,
        field: event.target.name,
        payload: event.target.value
      })
    },
    handleSelectedValues: (type, selectedArray) => {
      dispatch({
        type,
        selectedArray
      })
    },
    handleInputsWithTable: (type, priceArray) => {
      dispatch({
        type,
        priceArray
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