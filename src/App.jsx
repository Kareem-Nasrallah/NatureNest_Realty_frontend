import "./App.css";
import { Routes, Route } from "react-router-dom";

// Dashboard
import Users from "./pages/Dashboard/instedDashboard/user/Users";
import Dashboard from "./pages/Dashboard/Dashboard";
import UpdateUser from "./pages/Dashboard/instedDashboard/user/UpdateUser";
import CreateUser from "./pages/Dashboard/instedDashboard/user/CreateUser";

// web pages
// import Header from "./components/Header";
import Home from "./pages/Home";

// auth
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import RequireAuth from "./pages/authentication/RequireAuth";
import PersistLogin from "./pages/authentication/PersistLogin";
import CreatProducts from "./pages/Dashboard/instedDashboard/Products/CreatProducts";
import UpdateProducts from "./pages/Dashboard/instedDashboard/Products/UpdateProducts";
import ShowProducts from "./pages/ShowProducts/ShowProducts";
import EditProducts from "./pages/Dashboard/instedDashboard/Products/EditProducts";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={<ShowProducts />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/*" element={<Home />} />

        {/* Protected Roates */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="Users" element={<Users />} />
              <Route path="Users/:id" element={<UpdateUser />} />
              <Route path="CreateUser" element={<CreateUser />} />
              <Route path="CreatProducts" element={<CreatProducts />} />
              <Route path="Products" element={<EditProducts />} />
              <Route path="Products/:id" element={<UpdateProducts />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
