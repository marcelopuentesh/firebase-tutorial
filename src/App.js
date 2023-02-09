import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import CourseDataTable from "./Components/Courses/CourseDataTable";
import Managefiles from "./Components/Managefiles";
import Dashboard from "./Components/Dashboard";
import { TeacherRouter } from "./teachers/teachers.router";
import { StudentRouter } from "./students/students.router";
import { useEffect } from "react";
function App() {
  let currentUrl = window.location.pathname.split("/")
  useEffect(()=>{
    currentUrl =window.location.pathname.split("/");
    console.log(currentUrl)
  },[])
  return (
    // CREAR RUTEO DESDE EL LOGIN & register
    <div className="App">
      <BrowserRouter>
        {currentUrl[1] ==='student'?<StudentRouter />
        :currentUrl[1]==='admin'?(<Routes>
          <Route path="admin/" element={<Dashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/data" element={<CourseDataTable />} />
          <Route path="admin/manage-files" element={<Managefiles />} />
        </Routes>):currentUrl[1]=== 'teacher' ?<TeacherRouter />:null}
      </BrowserRouter>
    </div>
  );
}

export default App;
