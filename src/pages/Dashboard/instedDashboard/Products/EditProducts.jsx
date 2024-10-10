import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../../../authentication/UserContext";

const EditProducts = () => {
  const [product, setProduct] = useState([]);
  const [runUseEffect, setRun] = useState(0);

  const context = useContext(User);
  const token = context.value.token;

  useEffect(() => {
    axios
      .get("http://naturenestrealty.42web.io/api/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, [runUseEffect]);

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `http://naturenestrealty.42web.io/api/product/delete/${id}`,
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
        <td>
          <img src={product.image} height="100px" className="photoProduct" />
        </td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td className="text-success">$ {parseInt(product.price, 10)}</td>
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
          <th>Location</th>
          <th>Description</th>
          <th>Price</th>
          <th>Edite</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{showProducts}</tbody>
    </table>
  );
};

export default EditProducts;
