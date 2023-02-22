import "./student.css";

import { Routes, Route } from "react-router-dom";
import StudentProfile from "./Profile";
import StudentAssistance from "./Assistance";
import StudentDashboard from "./Dashboard";
import StudentSettings from "./Settings";

export function StudentRouter() {
  return (
    <Routes>
      <Route exact path="student/" element={<StudentDashboard />} />
      <Route exact path="student/profile" element={<StudentProfile />} />
      <Route exact path="student/assistance" element={<StudentAssistance />} />
      <Route exact path="student/settings" element={<StudentSettings />} />
    </Routes>
  );
}
