import React, { useEffect } from "react";
import axios from "axios";
import { useContext, useState } from "react";

import { User } from "../../../authentication/UserContext";
import { useNavigate } from "react-router-dom";

const UpdateProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [valid, setValid] = useState(false);
  const context = useContext(User);
  const token = context.value.token;

  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const gitData = async () => {
    try {
      const getAxios = await axios.get(
        `http://127.0.0.1:8000/api/product/showbyid/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(getAxios.data[0]);
      setTitle(getAxios.data[0].title);
      setDescription(getAxios.data[0].description);
      setImage(getAxios.data[0].image);
      setOldImage(getAxios.data[0].image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    gitData();
  }, []);

  async function toSubmit(e) {
    e.preventDefault();
    setValid(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      let res = await axios.post(
        `http://127.0.0.1:8000/api/product/update/${id}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/Dashboard/Products");
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
            {oldImage == image && (
              <small className="text-secondary">It's the Old Image</small>
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
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              placeholder="Description..."
              type="text"
              id="description"
            />
            {description.length == "" && valid && (
              <small className="text-danger">The Description is Required</small>
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
  );
};

export default UpdateProducts;
