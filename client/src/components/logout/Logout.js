import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <div className="text-center1">
      <nav className="navbar fixed-top navbar-expand-lg">
        <Link className="navbar-brand" to="#">
          Asset Management App
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
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Manager
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default First;
