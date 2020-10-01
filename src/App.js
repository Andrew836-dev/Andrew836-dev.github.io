import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/";
import About from "./components/About/";
import Portfolio from "./components/Portfolio/";
import Contact from "./components/Contact/";
import Details from "./components/Details/";
import NotFound from "./components/NotFound/";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={["/", "/portfolio"]} component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/portfolio/:project" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
