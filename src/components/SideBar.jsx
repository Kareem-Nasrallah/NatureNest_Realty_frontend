import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      id="sidebar"
      className="p-2 me-1 vh-100 w-25 d-inline-block border-end border-3 "
    >
      <NavLink
        to="Users"
        className={({ isActive }) =>
          isActive
            ? "dashElement text-dark py-1 my-2 px-2 activeDashElement"
            : "dashElement text-dark py-1 my-2 px-2"
        }
      >
        <i className="fa-solid fa-users d-inline-block me-3"></i>
        Users
      </NavLink>
      <NavLink
        to="CreateUser"
        className={({ isActive }) =>
          isActive
            ? "dashElement text-dark py-1 my-2 px-2 activeDashElement"
            : "dashElement text-dark py-1 my-2 px-2"
        }
      >
        <i className="fa-solid fa-user-plus d-inline-block me-3"></i>
        Create users
      </NavLink>
      <NavLink
        to="Products"
        className={({ isActive }) =>
          isActive
            ? "d-flex align-items-center dashElement text-dark py-1 my-2 px-2 activeDashElement"
            : "d-flex align-items-center dashElement text-dark py-1 my-2 px-2"
        }
      >
        <i className="fa-solid fa-list d-inline-block me-3"></i>
        <p className="m-0 text-center">
        Products
        </p>
      </NavLink>
      <NavLink
        to="CreatProducts"
        className={({ isActive }) =>
          isActive
            ? "d-flex align-items-center dashElement text-dark py-1 my-2 px-2 activeDashElement"
            : "d-flex align-items-center dashElement text-dark py-1 my-2 px-2"
        }
      >
        <i className="fa-solid fs-4 fa-square-plus d-inline-block me-3"></i>
        <p className="m-0 text-center">
        Create Products
        </p>
      </NavLink>
    </div>
  );
};

export default SideBar;
