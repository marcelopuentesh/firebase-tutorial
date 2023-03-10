import React from "react";
import "../../App.css";
import { SidebarData } from "./AdminSidebar";

export function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="tittle">{val.tittle}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
