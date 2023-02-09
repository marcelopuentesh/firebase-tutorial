import "./App.css";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Assistance from "./Assistance";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export function TeacherRouter() {
  return (
    <Routes>
      <Route path="teacher" element={<Dashboard />}>
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="assistance" element={<Assistance />} />
        <Route exact path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
