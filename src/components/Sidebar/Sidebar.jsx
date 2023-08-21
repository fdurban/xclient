import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption Icon={HomeIcon} text="inicio" />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
};

export default Sidebar;
