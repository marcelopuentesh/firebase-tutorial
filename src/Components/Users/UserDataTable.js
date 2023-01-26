import { React, useState } from "react";

const userData = [
  {
    name: "Jhon Ramirez",
    email: "soylapapa@gmail.com",
    role: "Admin",
    phone: 3103215321,
    status: "Active",
  },
  {
    name: "Marcelol",
    email: "giohanpuentes@gmail.com",
    role: "Student",
    phone: 0,
    status: "Active",
  },
];

export default function UserDataTable() {
  const [tableData, setTableData] = useState(userData);
  return (
    <div className="DataTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((userData) => (
            <tr>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>{userData.role}</td>
              <td>{userData.phone}</td>
              <td>{userData.status}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
