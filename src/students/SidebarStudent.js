import React from "react";

import "../App.css";
import { StudentSidebar } from "./StudentSidebar";

function SidebarStudent() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList-student">
        {StudentSidebar.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon"> {val.icon}</div>
              <div id="tittle"> {val.tittle} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarStudent;
