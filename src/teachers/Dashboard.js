import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { CheckBox } from "@mui/icons-material";

export default function Dashboard() {
  const courseData = [
    {
      id: 1,
      teacher: "Jhon",
    },
  ];

  return (
    <div className="Dashboard">
      <h1>Hello back Teacher #NAME</h1>
      <div className="Dashboard-classp">
        <h3>My courses</h3>
        <div className="course-container">
          Class by
          <h6>Teacher:</h6>
          <h6>Unit:</h6>
          <ListAltIcon></ListAltIcon>
        </div>
      </div>
      <div className="course-programmed">
        <h3>Programmed Courses</h3>
        <div className="course-programmed-container">
          Group #<h6># Students: 25</h6>
          <h6>dd/mm/yy</h6>
          <CheckBox></CheckBox>
          <a href="https://meet.google.com/">
            <input type="button" onClick="href()" value="JOIN SESSION" />
          </a>
        </div>
      </div>
      https://meet.google.com
    </div>
  );
}
