import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import Footer from './components/Footer';
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
            <Route onEnter={() => window.location.reload()} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
