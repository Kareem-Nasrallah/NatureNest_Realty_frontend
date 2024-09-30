import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../pages/authentication/UserContext";

const Header = () => {
  const [token, setToken] = useState(null);

  const hidnav = () => {
    document.getElementById("navbar").classList.remove("show");
  };

  const cookie = new Cookies();
  const context = useContext(User);

  useEffect(() => {
    let tokenCookie = cookie.get("Bearer");
    setToken(tokenCookie);
  });

  const logoutHandling = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/logout", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      cookie.remove("Bearer");
      cookie.remove("userData");
      setToken(null);
      context.setValue({ token: null, userData: null });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top align-items-center shadow">
        <div className="container-fluid">
          <Link onClick={hidnav} to="/" className="cinzel-decorative navbar-brand">
            NatureNest Realty
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <NavLink
                  onClick={hidnav}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link fristItem active" : "nav-link fristItem"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={hidnav}
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={hidnav}
                  to="/Products"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={hidnav} to="/Dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </li>
            </ul>
              {!token && (
                <li className="nav-item m-left-auto">
                  <Link
                    onClick={hidnav}
                    to="/Sign-up"
                    className="btn mt-2 mx-2 btn-primary"
                  >
                    Sign Up
                  </Link>
                  <Link
                    onClick={hidnav}
                    to="/Login"
                    className="btn mt-2 mx-2 btn-info"
                  >
                    Login
                  </Link>
                </li>
              )}

              {token && (
                <li className="nav-item m-left-auto px-3">
                  <p className="btn my-2 btn-danger" onClick={logoutHandling}>
                    Logout
                  </p>
                </li>
              )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
