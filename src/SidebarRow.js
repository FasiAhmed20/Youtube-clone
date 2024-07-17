import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, tittle }) {
  return (
    <div className="sidebar-Row">
      <Icon className="sidebar-rowicon" />
      <h3 className="sidebar-rowtittle">{tittle}</h3>
    </div>
  );
}

export default SidebarRow;
