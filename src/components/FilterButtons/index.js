import React from "react";
import "./style.css";

function FilterButtons(props) {
  const { handleSubmit, handleFilterRemoval, validTags, currentFilters } = props;

  return (
    <ul>
      {validTags.map(tag => {
        let onClick = () => { }
        let className = "tag";
        let active = currentFilters.includes(tag);
        if (active) {
          onClick = () => handleFilterRemoval(tag);
          className = "tag active"
        } else {
          onClick = () => handleSubmit(tag);
        }
        return (
          <li key={tag} onClick={onClick} className={className}>
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

export default FilterButtons;