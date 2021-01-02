import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./images/value.png";

import "./Register.css";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-lg">
        <img className="icon" src={logo} alt="" />
        <Link className="navbar-brand" to="#">
          <h4>Asset Management App</h4>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <h6>Back</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <form onSubmit={onSubmitForm} className="container8">
        <h1 className="text-center">Register</h1>

        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <button className="btn btn-success btn-block">Submit</button>
        <Link to="/login" className="link2">
          login
        </Link>
      </form>
    </Fragment>
  );
};

export default Register;
