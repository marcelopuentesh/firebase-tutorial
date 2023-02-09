import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import CourseDataTable from "./Components/Courses/CourseDataTable";
import Managefiles from "./Components/Managefiles";
import Dashboard from "./Components/Dashboard";
// import Login from "./Components/Login";

function App() {
  return (
    // CREAR RUTEO DESDE EL LOGIN & register
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" component={<Login />} /> */}
          <Route path="/" component={<Dashboard />} />
          <Route path="/users" component={<Users />} />
          <Route path="/data" component={<CourseDataTable />} />
          <Route path="/manage-files" component={<Managefiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
