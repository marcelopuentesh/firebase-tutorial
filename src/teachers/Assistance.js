import { React, useState } from "react";

const assistanceData = [
  {
    course: 1,
    level: 1,
    unit: 1,
    lesson: 1,
    students: 1,
    startdate: "01-02-23",
    enddate: "31-12-23",
    progress: "in process...",
  },
  {
    course: 1,
    level: 1,
    unit: 1,
    lesson: 1,
    students: 1,
    startdate: "01-02-23",
    enddate: "31-12-23",
    progress: "in process...",
  },
  {
    course: 1,
    level: 1,
    unit: 1,
    lesson: 1,
    students: 1,
    startdate: "01-02-23",
    enddate: "31-12-23",
    progress: "in process...",
  },
];

export default function Assistance() {
  const tableData = useState(assistanceData);
  return (
    <div className="assistance">
      <div className="assistance-table-tittle">
        <h1>Courses</h1>

        <div className="AssistanceTable">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
                <th>Unit</th>
                <th>Lesson</th>
                <th>Students</th>

                <th>Start Date</th>
                <th>End Date </th>
                <th>Progress</th>
                <th>Assistance</th>
              </tr>
            </thead>
            <tbody>
              {/* {tableData.map((assistanceData) => {})} */}
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0506</td>

                <td>01-02-23</td>
                <td>01-02-24</td>
                <td>10%</td>
                <td>
                  <button placeholder="WATCH" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0506</td>
                <td>01-02-23</td>
                <td>01-02-24</td>
                <td>10%</td>
                <td>
                  <button placeholder="WATCH" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
