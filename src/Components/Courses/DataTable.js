// TABLERO DE PRUEBA

// import { React, useState } from "react";
// import Managedata from "../ManageData/Managedata";
// import DataRow from "./DataRow";

// const showData = [
//   {
//     id: 1,
//     teacher: "Jhon Ramirez",
//     students: "25",
//     level: 1,
//     unit: 1,
//     lesson: 5,
//     progress: "true",
//   },
//   {
//     id: 2,
//     teacher: "Roxanne",
//     students: "10",
//     level: 1,
//     unit: 1,
//     lesson: 5,
//     progress: "true",
//   },
// ];

// export default function ShowDataTable() {
//   const [tableData, setTableData] = useState(showData);
//   const [counter, setCounter] = useState(showData.length);

//   const onSave = ({ teacher, students, level, unit, lesson, progress }) => {
//     console.log("Saving new data");
//     const newData = tableData.slice(0, tableData.length);
//     const lastItem = tableData[tableData.length - 1];
//     newData.push({
//       id: lastItem.id + 1,
//       teacher,
//       students,
//       level,
//       unit,
//       lesson,
//       progress,
//     });
//     setTableData(newData);
//     setCounter((prevCounter) => prevCounter + 1);
//     // TO DO: Sync with firebase
//   };
//   const onDelete = ({ index }) => {
//     const newData = tableData.slice(0, tableData.length);
//     newData.splice(index, 1);
//     setTableData(newData);
//   };
//   return (
//     <div className="ShowDataTable-tittle">
//       <h1>Data</h1>
//       <h4>Base de datos de cursos</h4>
//       <h5>Contador: {counter}</h5>
//       <div className="ShowDataTable">
//         <table>
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>Teacher</th>
//               <th>Students</th>
//               <th>Level</th>
//               <th>Unit</th>
//               <th>Lesson</th>
//               <th>Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((showData, index) => (
//               <DataRow
//                 showData={showData}
//                 key={index}
//                 onDelete={onDelete}
//                 index={index}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Managedata onCreate={onSave} />
//     </div>
//   );
// }
