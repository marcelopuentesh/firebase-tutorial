import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import Showdata from "./Components/ShowData/CourseDataTable";
import Managefiles from "./Components/ManageFiles/Managefiles";
import Menu from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/users" element={<Users />} />
          <Route path="/data" element={<Showdata />} />

          <Route path="/manage-files" element={<Managefiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
