import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import LogoHeader from "../LogoHeader/LogoHeader";
import "./CommonLayout.css";

const CommonLayout = () => {
  return (
    <>
      <div id="common-layout-main-wrapper-with-header">
        <LogoHeader />
        <div id="common-layout-menu-and-page-main-wrapper">
          <div id="common-layout-dashboard-menu-main">
            <DashboardMenu></DashboardMenu>
          </div>
          <div id="common-course-management-dashboard-pages">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
