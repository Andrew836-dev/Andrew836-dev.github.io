import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import {
  HashRouter as Router,
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
import API from "./utils/API";

function App() {
  const [repos, setRepos] = useState([]);
  const [validTags, setValidTags] = useState([]);

  useEffect(() => {
    API.getRepos().then(dbRepos => {
      API.getTags().then(dbTags => {
        setValidTags(dbTags);
        setRepos(dbRepos);
      });
    }).catch(console.log);
  }, []);

  return (
    <Router hashType="noslash">
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={["/", "/portfolio"]}>
              <Portfolio data={repos} validTags={validTags} />
            </Route>
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
