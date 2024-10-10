import axios from "axios";
import React, { useContext, useState } from "react";
import "../../../authentication/form.css";
import { User } from "../../../authentication/UserContext";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  const context = useContext(User);
  const token = context.value.token;

  const navigate = useNavigate();

  async function toSubmit(e) {
    e.preventDefault();
    setValid(true);
    try {
      let res = await axios.post(
        `http://naturenestrealty.42web.io/api/user/create`,
        {
          name: username,
          email: email,
          password: password,
          password_confirmation: repPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/Dashboard/Users");
    } catch (er) {
      const emailTakenError = er.response.data.message;
      if (emailTakenError == "The email has already been taken.") {
        setEmailError(emailTakenError);
      }
    }
  }

  return (
    <div className="container mt-3 noPadding">
      <div className="border shadow-lg bgMain">
        <form onSubmit={toSubmit} className="row g-3 container py-3">
          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
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
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              className="form-control"
              type="email"
              placeholder="Example@mail.com"
              id="email"
            />
            {email == "" && valid && (
              <small className="text-danger">Email is Required</small>
            )}
            {emailError && <small className="text-danger">{emailError}</small>}
          </div>
          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
