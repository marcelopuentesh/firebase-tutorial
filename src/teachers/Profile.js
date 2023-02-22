import React from "react";
import TeacherSidebar from "./Sidebar";

export default function TeacherProfile() {
  return (
    <div className="profile">
      <TeacherSidebar />
      <h1>Profile</h1>

      <div className="profile-container">Container</div>
      <div className="profile-items">Items</div>
    </div>
  );
}
