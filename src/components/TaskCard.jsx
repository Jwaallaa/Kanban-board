import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <span>{task.ticketId}</span>
        <img src={task.userImage} alt="User" className="user-image" />
      </div>
      <h4>{task.title}</h4>
      <div className="task-footer">
        <span className="priority-icon">!</span>
        <span className="tag">{task.tag[0]}</span>
      </div>
    </div>
  );
};

export default TaskCard;
