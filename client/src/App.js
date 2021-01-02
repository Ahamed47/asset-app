import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//components
import First from "./components/first/First";
import Home from "./components/home/Home";
import Asset from "./components/asset/Asset";
import ManagerAsset from "./components/asset/ManagerAsset";
import AdminHome from "./components/home/AdminHome";
import AdminReport from "./components/asset/AdminReport";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import PageNotFound from "./components/PageNotFound";
import InputRequest from "./components/request/InputRequest";
import ListRequest from "./components/request/ListRequest";
import ManagerRequests from "./components/request/ManagerRequests";

toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={First} />
            <Route
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/home" />
                )
              }
            />
            <Route
              path="/admin_login"
              render={(props) =>
                !isAuthenticated ? (
                  <AdminLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin_home" />
                )
              }
            />
            <Route
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/admin_register"
              render={(props) =>
                !isAuthenticated ? (
                  <AdminRegister {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin_login" />
                )
              }
            />
            <Route
              path="/home"
              render={(props) =>
                isAuthenticated ? (
                  <Home {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/manager_asset"
              render={(props) =>
                isAuthenticated ? (
                  <ManagerAsset {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/admin_home"
              render={(props) =>
                isAuthenticated ? (
                  <AdminHome {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin_login" />
                )
              }
            />
            <Route
              path="/asset"
              render={(props) =>
                isAuthenticated ? (
                  <Asset {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route
              path="/admin_report"
              render={(props) =>
                isAuthenticated ? (
                  <AdminReport {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route
              path="/admin_dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <AdminDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin_login" />
                )
              }
            />
            <Route
              path="/request"
              render={(props) =>
                isAuthenticated ? (
                  <InputRequest {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route
              path="/admin_request"
              render={(props) =>
                isAuthenticated ? (
                  <ListRequest {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route
              path="/requests"
              render={(props) =>
                isAuthenticated ? (
                  <ManagerRequests {...props} setAuth={setAuth} />
                ) : (
                  <PageNotFound />
                )
              }
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
