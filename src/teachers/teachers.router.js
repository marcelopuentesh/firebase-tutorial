import "./teacher.css";

import TeacherAssistance from "./Assistance";
import Settings from "./Settings";
import TeacherDashboard from "./Dashboard";
import TeacherProfile from "./Profile";

import { Route, Routes } from "react-router-dom";

export function TeacherRouter() {
  return (
    <Routes>
      <Route path="teacher/" element={<TeacherDashboard />}>
        <Route exact path="teacher/profile" element={<TeacherProfile />} />
        <Route
          exact
          path="teacher/assistance"
          element={<TeacherAssistance />}
        />
        <Route exact path="teacher/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
