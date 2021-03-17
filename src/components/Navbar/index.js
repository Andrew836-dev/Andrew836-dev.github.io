import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";

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
                <NavLink to="/portfolio" className="nav-link" activeClassName="nav-active" isActive={(match, location) => match || location.pathname === "/"}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="nav-active">About me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="nav-active">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>)
}

export default Navbar;