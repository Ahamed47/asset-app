import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/value.png";

function First() {
  return (
    <div className="text-center1">
      <nav className="navbar fixed-top navbar-expand-lg">
        <img className="icon" src={logo} alt="" />
        <Link className="navbar-brand" to="#">
          <h4>Asset Management App</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin_login">
                <h6>Admin</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <h6>Manager</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default First;
