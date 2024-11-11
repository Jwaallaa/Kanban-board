import React from 'react';
import './GroupToggle.css';
const GroupToggle = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="group-toggle">
      <div className='groupby'>
        <label>Group by:</label>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="user">User</option>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className='sortby'>
        <label>Sort by:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default GroupToggle;
