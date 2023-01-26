import React from "react";

export default function DataRow({ showData, onDelete, index, onEdit }) {
  return (
    <tr>
      <td>{showData.id}</td>
      <td>{showData.teacher}</td>
      <td>{showData.students}</td>
      <td>{showData.level}</td>
      <td>{showData.unit}</td>
      <td>{showData.lesson}</td>
      <td>{showData.startdate}</td>
      <td>{showData.enddate}</td>
      <td>{showData.progress}</td>
      <td>
        <button
          onClick={() => {
            onEdit(index);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
