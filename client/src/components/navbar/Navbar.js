import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/value.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <img className="icon" src={logo} alt="" />
        <Link className="navbar-brand" to="#">
          <h4>Asset Management App</h4>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <h6>Home</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manager_asset">
                <h6>Assets</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/request">
                <h6>Request</h6>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/requests">
                <h6>Requests</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <h6>Profile</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
