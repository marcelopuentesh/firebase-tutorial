import { React, useState } from "react";
import Managedata from "../ManageCourses/Managedata";
import DataRow from "./DataRow";
import Sidebar from "../Sidebar/Sidebar";

export default function CourseDataTable() {
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  const [showData, setShowData] = useState([
    {
      id: 1,
      teacher: "Manolo C",
      students: "25",
      level: 1,
      unit: 1,
      lesson: 5,
      startdate: "2023-03-10",
      enddate: "2023-03-10",
      progress: "100%",
    },
    {
      id: 2,
      teacher: "Roxanne Whisper",
      students: "10",
      level: 1,
      unit: 1,
      lesson: 5,
      startdate: "2023-03-10",
      enddate: "2023-03-10",
      progress: "100%",
    },
  ]);
  const [tableData, setTableData] = useState(showData);
  const [counter, setCounter] = useState(showData.length);

  const onSave = ({
    teacher,
    students,
    level,
    unit,
    lesson,
    startdate,
    enddate,
    progress,
  }) => {
    const newData = tableData.slice(0, tableData.length);
    const lastItem = tableData[tableData.length - 1];
    newData.push({
      id: lastItem.id + 1,
      teacher,
      students,
      level,
      unit,
      lesson,
      startdate,
      enddate,
      progress,
    });
    setTableData(newData);
    setCounter((prevCounter) => prevCounter + 1);
    // TO DO: Sync with firebase
  };
  const onDelete = ({ index }) => {
    const newData = tableData.slice(0, tableData.length);
    newData.splice(index, 1);
    setTableData(newData);
  };
  const onEdit = (index) => {
    console.log(index, "onEdit");
    setEditIndex(index);
    setEditing(true);
  };
  const onCancel = (index) => {
    console.log("cancel");
    setEditing(false);
  };
  const onUpdate = ({
    teacher,
    students,
    level,
    unit,
    lesson,
    startdate,
    enddate,
    progress,
  }) => {
    const newData = showData.slice(0, showData.length);
    newData[editIndex] = {
      teacher,
      students,
      level,
      unit,
      lesson,
      startdate,
      enddate,
      progress,
    };
    setTableData(newData);
    setEditIndex(false);
    setEditing(false);
  };
  return (
    <div>
      <Sidebar />
      <div className="ShowDataTable-tittle">
        <h1>Courses</h1>
        <h4>Base de datos de cursos</h4>
        <h5>Contador: {counter}</h5>
        <div className="ShowDataTable">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Teacher</th>
                <th>Students</th>
                <th>Level</th>
                <th>Unit</th>
                <th>Lesson</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((showData, index) => (
                <DataRow
                  showData={showData}
                  key={`${index}cItem`}
                  onDelete={onDelete}
                  index={index}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Managedata
          onCreate={onSave}
          update={editing}
          onCancel={onCancel}
          onUpdate={onUpdate}
          data={editing ? tableData[editIndex] : {}}
        />
      </div>
    </div>
  );
}
