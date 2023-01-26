import React from "react";

export default function DataForm() {
  return (
    <div className="data-form">
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input placeholder="Name" type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="E-mail" type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input placeholder="Role" type="text" name="role" id="role" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input placeholder="Phone" type="number" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            placeholder="Status"
            type="boolean"
            name="status"
            id="status"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
