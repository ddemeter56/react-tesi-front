import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthContext from './context/auth.context';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Footer from './components/Footer';
import Result from './components/Result';
import EntityPage from './components/EntityPage';

function About() {
  return <h2>Lehetne animated scrolling</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}


function App() {
  const [ userDetails, setUserDetails ] = useState({  
    isLoggedIn: false, // logged in or not
    expiresIn: null, //When the token expires
    token: null, // keycloak token
    type: null, // user, pt, gym-owner, gym-manager
    relatedPages: [] // referenceCodes, 
  })

  const value = { userDetails, setUserDetails };
  return (
    <AuthContext.Provider value={value}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/list/gym/:searchParams">
            <Result type='gym' />
          </Route>
          <Route path="/list/pt/:searchParams">
            <Result type="pt" />
          </Route>
          <Route path="/:entityPage">
            <EntityPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
