import { React, useState } from "react";

const assistanceData = [
  { date: "01-12-03", id: 1, level: 1, students: 1, status: "in process..." },
  { date: "01-12-03", id: 1, level: 1, students: 1, status: "in process..." },
  { date: "01-12-03", id: 1, level: 1, students: 1, status: "in process..." },
  { date: "01-12-03", id: 1, level: 1, students: 1, status: "in process..." },
  { date: "01-12-03", id: 1, level: 1, students: 1, status: "in process..." },
];

export default function Assistance() {
  const tableData = useState(assistanceData);
  return (
    <div className="assistance">
      <div className="assistance-table-tittle">
        <h1>Assistance</h1>
        <h4>Courses: 1</h4>
        <h4>Teacher: $NAME</h4>
        <h4>Level: 1</h4>

        <div className="AssistanceTable">
          <table>
            <thead>
              <tr>
                <th>Unit</th>
                <th>Lesson</th>
                <th>Date Lesson</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Assisted</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>03-02-23</td>
                <td>03-02-23</td>
                <td>03-02-24</td>
                <td>True</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1</td>
                <td>03-02-23</td>
                <td>09-03-23</td>
                <td>03-06-24</td>
                <td>True</td>
                <td>40%</td>
              </tr>
              {/* ;{tableData.map((assistanceData) => {})} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
