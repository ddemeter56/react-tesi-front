import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from './context/auth.context';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Footer from './components/Footer';
import Result from './components/Result';
import EntityPage from './components/EntityPage';
import AdminPage from './components/AdminPage';
import { processUrlParams } from './utils/auth';

const theme = createTheme({
  
})

function About() {
  return <h2>Lehetne animated scrolling</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}


function App() {
  const authInit = processUrlParams();

  const initUserDetails = authInit ? authInit : {  
    isLoggedIn: false, // logged in or not
    accessToken: null, // keycloak token
    tokenRequestedAt: null, 
    tokenValidity: null,
    tokenType: null
  };

  const [ userDetails, setUserDetails ] = useState(initUserDetails)

  const value = { userDetails, setUserDetails };
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/admin">
              <AdminPage />
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
    </ThemeProvider>
    
  );
}

export default App;
