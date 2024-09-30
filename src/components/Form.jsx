/* import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "../pages/authentication/form.css";
import { User } from "../pages/authentication/UserContext";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const newUser = useContext(User);

  useEffect(() => {
    setUsername(props.name || "");
    setEmail(props.email || "");
  }, [props.name]);

  async function toSubmit(e) {
    let flag;
    e.preventDefault();
    setValid(true);
    if (
      username == "" ||
      email == "" ||
      password.length < 8 ||
      password !== repPassword
    ) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoinet}`,
          {
            name: username,
            email: email,
            password: password,
            password_confirmation: repPassword,
          }
        );
        if (res.status == 200) {
          const token = res.data.data.token;
          const userData = res.data.data.user;
          newUser.setValue({ token, userData });
          console.log(newUser.value);
        }
      }
    } catch (er) {
      setEmailError(er.status);
    }
  }
  
  return (
    <div
      className={
        props.createUserStyle
          ? "border shadow-lg bgMain"
          : "border bgMain shadow-lg sign-up mx-3"
      }
    >
      <form onSubmit={toSubmit} className="row g-3 container py-3">
        <div className="form-group">
          <label className="pb-1 light-bold" htmlFor="username">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            name="username"
            placeholder="Name..."
            type="text"
            id="username"
          />
          {username == "" && valid && (
            <small className="text-danger">Username is Required</small>
          )}
        </div>

        <div className="form-group">
          <label className="pb-1 light-bold" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            name="email"
            type="email"
            placeholder="Example@mail.com"
            id="email"
          />
          {email == "" && valid && (
            <small className="text-danger">Email is Required</small>
          )}
          {emailError == 422 && (
            <small className="text-danger">Email is already been taken</small>
          )}
        </div>
        <div className="form-group">
          <label className="pb-1 light-bold" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            name="password"
            placeholder="Password"
            type="password"
            id="password"
          />
          {password.length < 8 && valid && (
            <small className="text-danger">
              Password must be more than 8 Char
            </small>
          )}
        </div>

        <div className="form-group">
          <label className="pb-1 light-bold" htmlFor="repPassword">
            Repeat Password
          </label>
          <input
            value={repPassword}
            onChange={(e) => setRepPassword(e.target.value)}
            className="form-control"
            name="repPassword"
            type="password"
            placeholder="Repeat Password"
            id="repPassword"
          />
          {password !== repPassword && valid && (
            <small className="text-danger">Password doesn't match</small>
          )}
        </div>

        <button
          type="submit"
          className=" shadow-lg btn btn-primary w-25 m-auto mt-3"
        >
          {props.submitBtn}
        </button>
      </form>
    </div>
  );
};

export default Form;