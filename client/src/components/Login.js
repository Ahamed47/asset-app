import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./images/value.png";
import "./Login.css";
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
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
        toast.success("Logged in Successfully", {
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
      <div className="container5">
        <h1 className="mt-5 text-center">Login</h1>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="E-Mail"
            onChange={(e) => onChange(e)}
            className="form-control my-3 border"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => onChange(e)}
            className="form-control my-3 border"
          />
          <button className="btn btn-success btn-block border">Submit</button>
        </form>
        <Link to="/register" className="link">
          register
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
