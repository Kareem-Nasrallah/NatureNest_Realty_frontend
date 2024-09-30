import React from 'react'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from '../pages/authentication/UserContext';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [runUseEffect, setRun] = useState(0);

  const context = useContext(User);
  const token = context.value.token;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) =>{
        setProduct(data.data)})
      .catch((err) => console.log(err));
  }, [runUseEffect]);

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/product/delete/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res.status == 200) {
        setRun((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const showProducts = product.map((product, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td><img src={product.image} height="100px" className='photoProduct' /></td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>
          <Link to={`${product.id}`}>
            <i className="fa-solid fa-pen-to-square btn btn-outline-primary"></i>
          </Link>
        </td>
        <td onClick={() => deleteProduct(product.id)}>
          <i className="fa-solid fa-trash btn btn-outline-danger"></i>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover table-success mt-3 text-center align-middle">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Editing</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{showProducts}</tbody>
    </table>
  );
};

export default Products