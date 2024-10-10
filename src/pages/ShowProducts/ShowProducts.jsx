import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cookies from "universal-cookie";

const ShowProducts = () => {
  const [product, setProduct] = useState([]);
  const [date, setDate] = useState("");
  const [transport, setTransport] = useState(false);
  const [location, setLocation] = useState("");
  const [valid, setValid] = useState(false);
  const [time, setTime] = useState("");
  const [message, setMessage] = useState(false);

  const cookie = new Cookies();
  const userData = cookie.get("userData");

  const name = userData.name;
  const email = userData.email;

  useEffect(() => {
    axios
      .get("http://naturenestrealty.42web.io/api/products")
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const transportFild = () => {
    if (transport) {
      if (location != "") {
        return true;
      } else return false;
    } else return true;
  };

  const toSubmit = (e) => {
    e.preventDefault();
    setValid(true);
    if (date != "" && time != "" && transportFild()) {
      const offcanvas = document.getElementById("offcanvas");

      setTimeout(() => {
        offcanvas.classList.remove("show");
        offcanvas.style.visibility = "hidden";
        offcanvas.removeAttribute("aria-modal");
        offcanvas.removeAttribute("role");
        offcanvas.setAttribute("aria-hidden", "true");
        setMessage(false);

        document.body.style = "overflow: auto; padding: 0";
      }, 2500);
      setMessage(true);
      setDate("");
      setLocation("");
      setTime("");
      setValid(false);
    }
  };

  const showProducts = product.map((product, index) => {
    return (
      <div key={index} className="brr-15 card p-3 productCard col-3 border-2">
        <img src={product.image} className="card-img-top brr-15" />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="text-dark card-text">{product.description}</p>
        </div>
        <p className="text-success ps-3 fw-bold card-text">
          $ {parseInt(product.price, 10)}
        </p>
        <button
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          data-bs-toggle="offcanvas"
          className="btn btn-success m-auto border border-dark"
        >
          Book a visit
        </button>
      </div>
    );
  });

  return (
    <>
      <Header />
      <h2 className="flixableMarg bgMainNoBrr p-2 text-center">
        Our Natural Nests
      </h2>
      <div className="container">
        <div className="pt-3 pb-4 row justify-content-evenly flex-wrap gap-5 ">
          {showProducts}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-center border-0 d-flex align-items-center justify-content-center"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
        data-bs-backdrop="false"
        style={{ background: "#00000055" }}
      >
        <div className="bgBody w-75">
          <div className="offcanvas-header bgMainNoBrr mt-3 py-2 px-4">
            <h5 id="offcanvasLabel">Book a visit</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form
              onSubmit={toSubmit}
              className="d-flex flex-column g-3 gap-3 container py-1"
            >
              <div className="row gap-3 pe-0">
                <div className="form-group col-sm pe-0">
                  <label className="pb-1 light-bold">Name</label>
                  <input
                    disabled
                    value={name}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group col-sm-7 pe-0">
                  <label className="pb-1 light-bold">Email</label>
                  <input
                    disabled
                    value={email}
                    className="form-control"
                    type="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="pb-1 light-bold" htmlFor="date">
                  Date
                </label>
                <input
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="form-control"
                  type="date"
                  placeholder="Example@mail.com"
                  id="date"
                />
                {date == "" && valid && (
                  <small className="text-danger">
                    Date of your visit is Required
                  </small>
                )}
              </div>

              <div className="form-group">
                <label className="pb-1 light-bold" htmlFor="date">
                  Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-select"
                >
                  <option value="">Choose your visit Time ↓</option>
                  <option value="9:00">9:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
                {time == "" && valid && (
                  <small className="text-danger">
                    Time of your visit is Required
                  </small>
                )}
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a Message here"
                  id="textarea"
                ></textarea>
                <label htmlFor="textarea" className="text-secondary">
                  wright a Message if you want
                </label>
              </div>

              <div className="form-group">
                <div className="form-check form-switch d-flex align-items-center gap-3 w-fit">
                  <input
                    className="form-check-input shadow-none pointer"
                    type="checkbox"
                    id="switchTransport"
                    onChange={() => {
                      setTransport(!transport);
                      setLocation("");
                    }}
                  />
                  <label
                    className="form-check-label pointer"
                    htmlFor="switchTransport"
                  >
                    want a ride
                  </label>
                </div>
              </div>

              {transport && (
                <div className="form-group mb-2">
                  <label className="pb-1 light-bold" htmlFor="location">
                    Your Location
                  </label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                    placeholder="Street, District, City, County"
                    type="text"
                    id="location"
                  />
                  {location == "" && valid && transport && (
                    <small className="text-danger">
                      Your Location is Required
                    </small>
                  )}
                </div>
              )}

              <button
                type="submit"
                className=" shadow-lg btn btn-primary w-fit mx-auto mt-auto"
                id="liveToastBtn"
              >
                Book a Visit
              </button>
              {message && (
                <small className="bg-success text-light text-center">
                  We will conect you soon
                </small>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowProducts;
