import React from "react";
import "./style.css";

function PortfolioCard(props) {
  const { title, homepageURL, image, repoURL, description } = props.repo;
  return (
    <div className="five columns repo-card ">
      <h4 className="repo-title">{title}</h4>
      <p className="repo-text">{description}</p>
      <div className="repo-image-container">
        <img className="repo-image" src={image} alt={`${title} thumbnail`} />
      </div>
      <div>
        {!!homepageURL && <a className="button u-pull-left" href={homepageURL} target="blank" rel="noopener noreferrer">Live Site</a>}
        <a className="button u-pull-right" href={repoURL} target="blank" rel="noopener noreferrer">Repo</a>
      </div>
    </div>
  );
}
export default PortfolioCard;