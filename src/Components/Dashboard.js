import React from "react";
import "../App.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Sidebar } from "./Sidebar/Sidebar";

//DENTRO DEL DASHBOARD SE CREA UN COUNTER DONDE SE RENDERIZA EL TOTAL DE LOS USUARIOS

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard-tittle">
        <h1>Dashboard</h1>
        <div className="dashboard">
          <PeopleAltIcon className="users-icon" />

          <h3 className="users-text">Usuarios en app = "null"</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
