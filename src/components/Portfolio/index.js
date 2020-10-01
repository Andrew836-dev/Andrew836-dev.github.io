import React, { useState, useEffect, useRef } from "react";
import PortfolioCard from "../PortfolioCard";
import API from "../../utils/API";

function Portfolio(props) {
  const [repos, setRepos] = useState([]);
  const [filters, setFilters] = useState([]);
  // const inputRef = useRef();

  useEffect(() => {
    API.getRepos().then(response => {
      setRepos(response)
    }).catch(console.log);
  });

  function filteredRepos() {
    if (filters.length) {
      console.log("There's a filter");
      return repos.slice();
    } else {
      console.log("There's no filter");
      return repos.slice();
    }
  }

  // function handleInput() {
  //   console.log(inputRef.current.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(inputRef.current.value);
  // }

  return <div>
    <h1>Portfolio</h1>
    {/* <form onSubmit={handleSubmit}>
      <input name="filter" type="text" onChange={handleInput} ref={inputRef} />
      <input className="hidden" type="submit" />
    </form> */}
    {(repos.length ?
      filteredRepos().map(repo => {
        return <PortfolioCard
          key={repo._id}
          repo={repo} />
      }) :
      <div>Loading</div>
    )}
  </div>;
}

export default Portfolio;