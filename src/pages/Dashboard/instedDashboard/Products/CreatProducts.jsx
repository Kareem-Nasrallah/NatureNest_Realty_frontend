import React from "react";
import axios from "axios";
import { useContext, useState } from "react";

import { User } from "../../../authentication/UserContext";
import { useNavigate } from "react-router-dom";

const CreatProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  console.log(price);
  const [valid, setValid] = useState(false);
  // const [descriptionError, setDescriptionError] = useState(false);
  const context = useContext(User);
  const token = context.value.token;

  const navigate = useNavigate();

  // const checkDescErr = () => {
  //   if (description.length < 10 || description.length > 100) {
  //     setDescriptionError(false);
  //   } else setDescriptionError(true);
  // };

  async function toSubmit(e) {
    e.preventDefault();
    setValid(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      // if (descriptionError) {
      let res = await axios.post(
        `http://naturenestrealty.42web.io/api/product/create`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/Dashboard/Products");
      // }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-3 noPadding">
      <div className="border shadow-lg bgMain">
        <form onSubmit={toSubmit} className="row g-3 container py-3">
          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="image">
              Image
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
              type="file"
              placeholder="Image"
              id="image"
            />
            {image == "" && valid && (
              <small className="text-danger">The image is required</small>
            )}
          </div>

          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="title">
              Location
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Name..."
              type="text"
              id="title"
            />
            {title == "" && valid && (
              <small className="text-danger">The Title is Required</small>
            )}
          </div>

          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="description">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                // checkDescErr();
                // console.log(descriptionError)
              }}
              className="form-control"
              placeholder="Description..."
              type="text"
              id="description"
            />
            {description.length == "" && valid && (
              <small className="text-danger">The Description is Required</small>
            )}
          </div>

          <div className="form-group">
            <label className="pb-1 light-bold" htmlFor="price">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="form-control text-success"
              placeholder="Price..."
              type="number"
              id="price"
            />
            {price > 0 && valid && (
              <small className="text-danger">The Price is Required</small>
            )}
          </div>

          <button
            type="submit"
            className=" shadow-lg btn btn-primary w-25 m-auto mt-3"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatProducts;
