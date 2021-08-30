import React from 'react';

const AuthContext = React.createContext({
  userDetails: {
    isLoggedIn: false, // logged in or not
    expiresIn: null, //When the token expires
    token: null, // keycloak token
    type: null, // user, pt, gym-owner, gym-manager
    relatedPages: [], // referenceCodes,
  },
  setUserDetails: () => {} 
})

export default AuthContext;