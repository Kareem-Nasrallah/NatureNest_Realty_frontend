import axios from "axios";
import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./form.css";
import { User } from "./UserContext";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(true);
  const [valid, setValid] = useState(false);

  const cookie = new Cookies();

  const newUser = useContext(User);

  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    location.state?.from === "/Dashboard"
      ? navigate("/Dashboard")
      : navigate("/");
  };

  const toSubmit = async (e) => {
    e.preventDefault();
    setValid(true);
    try {
      const send = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      const token = send.data.data.token;
      const userData = send.data.data.user;
      console.log( send.data.data.user);
      cookie.set("Bearer", token, { path: "/" });
      cookie.set("userData", userData, { path: "/" });
      newUser.setValue({ token, userData });
      handleNavigate();
    } catch {
      if (email != "" && password != "") {
        setAuthError(false);
      } else {
        setAuthError(true);
      }
    }
  };
  

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center pb-4">
      <Header />
      <div>
        <div className="border shadow-lg sign-up bgMain ">
          <form
            action=""
            onSubmit={toSubmit}
            className="row g-3 container py-3"
          >
            <div className="form-group">
              <label className="pb-1 light-bold" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setAuthError(true);
                }}
                className="form-control"
                type="email"
                placeholder="Example@mail.com"
                id="email"
              />
              {email == "" && valid && (
                <small className="text-danger">Email is Required</small>
              )}
            </div>
            <div className="form-group">
              <label className="pb-1 light-bold" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAuthError(true);
                }}
                className="form-control"
                placeholder="Password"
                type="password"
                id="password"
              />
              {password == "" && valid && (
                <small className="text-danger">Password is Required</small>
              )}
            </div>
            {!authError && (
              <small className="text-danger">Wrong email or password !</small>
            )}
            <button
              type="submit"
              className="shadow btn btn-primary w-25 m-auto mt-3"
            >
              Login
            </button>
          </form>
        </div>
        <small className=" me-5 mt-2 w-50 text-start">
          <Link to="/Sign-up" className="d-inline-block ">
            Or Create a new Acount
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
