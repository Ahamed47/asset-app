import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/value.png";

function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
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
              <Link className="nav-link" to="/admin_home">
                <h6>Home</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/asset">
                <h6>Assets</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_report">
                <h6>Report</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_request">
                <h6>Requests</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin_dashboard">
                <h6>Profile</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
