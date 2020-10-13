import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ activeTab }) => {
  return (
    <nav className="clearfix">
      <ul>
        <li className={activeTab.name === "New" ? "active" : ""}>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/new">Used</Link>
        </li>
        <li>
          <Link to="/new">Service</Link>
        </li>
        <li>
          <Link to="/new">Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
