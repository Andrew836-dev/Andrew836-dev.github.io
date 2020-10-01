import React from "react";

function PortfolioCard(props) {
  const {title, homepageURL, image, repoURL, description} = props.repo;
  return (
  <div>
    <h4 className="repo-title">{title}</h4>
    <p className="repo-text">{description}</p>
    <img className="repo-image" src={image} alt={`${title} thumbnail`} />
    <p><a className="button" href={homepageURL}>{homepageURL}</a></p>
    <p><a className="button" href={repoURL}>{repoURL}</a></p>
  </div>
  );
}
export default PortfolioCard;