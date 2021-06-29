import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';

function About() {
  return <h2>About</h2>;
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
