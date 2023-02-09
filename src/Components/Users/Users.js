import React from "react";
import UserDataTable from "./UserDataTable";
import Sidebar from "../Sidebar/Sidebar";

function Users() {
  return (
    <div className="users">
      <Sidebar />
      <div className="tittle-users">
        <h1>Users</h1>
      </div>
      <UserDataTable />
    </div>
  );
}

export default Users;
