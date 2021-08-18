import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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

function RegisterGYM() {
  return <h2>Register GYM </h2>;
}

function RegisterPT() {
  return <h2>Register PT</h2>;
}

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/register/gym">
            <RegisterGYM />
          </Route>
          <Route path="/register/professional">
            <RegisterPT />
          </Route>
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
    </>
  );
}

export default App;
