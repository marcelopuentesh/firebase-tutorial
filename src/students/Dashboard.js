import React, { useState } from "react";
import "../App.css";
import SidebarStudent from "./SidebarStudent";

function StudentDashboard() {
  const [course] = useState();
  return (
    <div className="dashboard-student">
      <SidebarStudent />
      <h1>Hello back $NAME</h1>
      <h4>It's so good to see you again</h4>
      <div className="dashboard-student-container">{course}</div>
      <div className="dashboard-student-date"> </div>
    </div>
  );
}

export default StudentDashboard;
