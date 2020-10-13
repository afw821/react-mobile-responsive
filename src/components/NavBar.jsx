import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ activeTab }) => {
  return (
    <nav className="clearfix">
      <ul>
        <li className={activeTab.name === "New" ? "active" : ""}>
          <Link to="/react-mobile-responsive">New</Link>
        </li>
        <li>
          <Link to="/react-mobile-responsive">Used</Link>
        </li>
        <li>
          <Link to="/react-mobile-responsive">Service</Link>
        </li>
        <li>
          <Link to="/react-mobile-responsive">Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
