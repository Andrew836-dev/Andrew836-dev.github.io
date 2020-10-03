import React from "react";
import "./style.css";

function AppliedFilters(props) {
  const handleFilterRemoval = props.handleFilterRemoval
  return props.filters.map(filter =>
    (
      <p key={filter} className={`filter ${filter.split(" ")[0].toLowerCase()}`}>
        {prettyPrint(filter)}
        <span className="remove-filter" onClick={() => handleFilterRemoval(filter)}> X</span>
      </p>
    )
  )
}

function prettyPrint(string) {
  const output = string.split(" ").map(word => {
    return word.split("").map((char, index) => {
      if (index > 0) return char;
      else return char.toUpperCase();
    }).join("");
  });
  return output.join(" ") + " ";
}

export default AppliedFilters;