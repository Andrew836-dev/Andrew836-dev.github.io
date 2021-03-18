import React, { useState } from "react";
import PortfolioCard from "../../components/PortfolioCard";
import FilterButtons from "../../components/FilterButtons";

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
    if (validTags.includes(value) && !filters.includes(value)) {
      setFilters([...filters, value]);
    }
  }

  function handleFilterRemoval(value) {
    setFilters(filters.filter(name => name !== value));
  }

  return <div>
    <p>Showing {`${filteredRepos().length} of ${data.length}`} projects, click a filter tag to display projects where I performed that role</p>
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
      <Loader />
    )}
  </div>;
}

function Loader() {
  return <p>Loading</p>
}

export default Portfolio;