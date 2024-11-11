import React from 'react';
import './GroupToggle.css';

const GroupToggle = ({ setGroupBy }) => {
  return (
    <div className="group-toggle">
      <label>Grouping:</label>
      <select onChange={(e) => setGroupBy(e.target.value)}>
        <option value="user">User</option>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupToggle;
