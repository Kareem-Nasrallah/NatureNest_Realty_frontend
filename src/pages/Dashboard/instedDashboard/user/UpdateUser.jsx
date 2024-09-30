import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../../../authentication/form.css";
import { User } from "../../../authentication/UserContext";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSameEmail,setIsSameEmail]=useState('');

  const id = window.location.pathname.split("/")[3];

  const context = useContext(User);
  const token = context.value.token;

  const navigate = useNavigate()

  const getData = async () => {
    try {
      const axiosData = await axios.get(
        `http://127.0.0.1:8000/api/user/showbyid/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUsername(axiosData.data[0].name);
      setEmail(axiosData.data[0].email);
      setIsSameEmail(axiosData.data[0].email);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toSubmit = async (e) => {
    e.preventDefault();
    setValid(true);
    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/user/update/${id}`,
        {
          name: username,
          email: email,
          password: password,
          password_confirmation: repPassword,
        },{
          headers:{
            Authorization: "Bearer " + token
          }
        }
      );
      navigate("/Dashboard/Users")
    } catch (er) {
      console.log(er);
      const emailTakenError = er.response.data.message;
      if (emailTakenError == "The email has already been taken.") {
        setEmailError(emailTakenError);
      }
    }
  };

  return (
    <div className="h-75">
      <h4 className="p-2 bgMain mt-3" style={{ borderRadius: "5px" }}>
        update
      </h4>
      <div className="d-flex mt-5 justify-content-center">
        <div className="border bgMain shadow-lg sign-up mx-3">
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
              {isSameEmail === email && valid && (
                <small className="text-danger">
                  you have to chang the Email
                </small>
              )}
              {emailError && isSameEmail != email && (
                <small className="text-danger">{emailError}</small>
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;
