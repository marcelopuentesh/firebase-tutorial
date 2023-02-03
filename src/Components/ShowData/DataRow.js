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
        {/* SE CRASHEA LA APP AL EDITAR */}
        <button
          onClick={() => {
            onEdit(index);
          }}
        >
          Edit
        </button>
        {/* #SOLUCIONAR El boton de Delete tiene un error, elimina el primero de la fila y no el archivo que se crea.  */}
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
