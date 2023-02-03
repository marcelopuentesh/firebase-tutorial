import React from "react";
import "../../App.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function Menu() {
  return (
    <div className="dashboard-tittle">
      <h1>Dashboard</h1>
      <div className="dashboard">
        <PeopleAltIcon className="users-icon" />

        <h3 className="users-text">Usuarios en app = "null"</h3>
      </div>
    </div>
  );
}

export default Menu;
