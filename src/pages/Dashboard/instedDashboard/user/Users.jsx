import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../../../authentication/UserContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [runUseEffect, setRun] = useState(0);

  const context = useContext(User);
  const token = context.value.token;

  useEffect(() => {
    axios
      .get("http://naturenestrealty.42web.io/api/user/show", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, [runUseEffect]);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `http://naturenestrealty.42web.io/api/user/delete/${id}`,
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

  const showUsers = users.map((user, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`${user.id}`}>
            <i className="fa-solid fa-pen-to-square btn btn-outline-primary"></i>
          </Link>
        </td>
        <td onClick={() => deleteUser(user.id)}>
          <i className="fa-solid fa-trash btn btn-outline-danger"></i>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover table-success mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Editing</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{showUsers}</tbody>
    </table>
  );
};

export default Users;
