import React, { useState } from "react";
import PortfolioCard from "../PortfolioCard";
import FilterButtons from "../FilterButtons";

function Portfolio(props) {
  const { data, validTags } = props

  const [filters, setFilters] = useState([]);

  function filteredRepos() {
    if (filters.length) {
      return data.filter(repo =>
        filters.every(filter =>
          repo.tags.includes(filter)
        )
      );
    } else {
      return data.slice();
    }
  }

  function handleSubmit(value) {
    const lowerValue = value.toLowerCase();
    if (validTags.includes(lowerValue) && !filters.includes(lowerValue)) {
      setFilters([...filters, lowerValue]);
    }
  }

  function handleFilterRemoval(value) {
    setFilters(filters.filter(name => name !== value));
  }

  return <div>
    <h1>Portfolio</h1>
    <p>Click the buttons to toggle filters</p>
    <FilterButtons 
      handleSubmit={handleSubmit} 
      handleFilterRemoval={handleFilterRemoval} 
      validTags={validTags} 
      currentFilters={filters} />
    {(data.length ?
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