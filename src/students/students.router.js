import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Assistance from "./Assistance";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

export function StudentRouter() {
  return (
        <Routes>
          <Route exact path="student/" element={<Dashboard />} />
          <Route exact path="student/profile" element={<Profile />} />
          <Route exact path="student/assistance" element={<Assistance />} />
          <Route exact path="student/settings" element={<Settings />} />
        </Routes>
  );
}