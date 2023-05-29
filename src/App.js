import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from './context/auth.context';
import { SnackbarProvider } from './context/snackbar.context';
import { SpinnerProvider } from './context/spinner.context';
import GlobalSnackbar from './components/commons/snackbar/GlobalSnackbar';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Footer from './components/Footer';
import Result from './components/page-content/result-page/Result';
import EntityPage from './components/page-content/entity-page/EntityPage';
import AdminPage from './components/page-content/admin-page/AdminPage';
import { processUrlParams } from './utils/auth';
import GymRegisterPage from './components/page-content/registration-page/gym/GymRegisterPage';

const theme = createTheme({
  typography: {
    "fontFamily": `"titilliumRegular","titilliumBlack", "titilliumLight", "titilliumExtraLight"`
  }
})

function About() {
  return <h2>Lehetne animated scrolling</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}


function App() {
  const authInit = processUrlParams();

  console.log('I WAS BUILT')
  console.log(theme)
  const initUserDetails = authInit ? authInit : {
    isLoggedIn: false, // logged in or not
    accessToken: null, // keycloak token
    tokenRequestedAt: null,
    tokenValidity: null,
    tokenType: null
  };

  const [userDetails, setUserDetails] = useState(initUserDetails);
  const value = { userDetails, setUserDetails };
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={value}>
        <SnackbarProvider>
          <SpinnerProvider>
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
                <Route path="/register/gym">
                  <GymRegisterPage userDetails={userDetails} />
                </Route>
                <Route path="/register/trainer">
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
            <GlobalSnackbar />
          </SpinnerProvider>
        </SnackbarProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
