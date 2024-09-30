import React, { useContext, useEffect } from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="d-flex justify-content-start">
        <SideBar />
        <div className="d-inline-block container noPadding">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
