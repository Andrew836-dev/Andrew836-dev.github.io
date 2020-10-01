import React from "react";
import './style.css'
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="three columns">
            <h3>Andrew Gray</h3>
          </div>
          <div className="nine columns">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About me</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>)
}

export default Navbar;