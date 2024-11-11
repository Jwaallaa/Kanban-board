import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <span>{task.ticketId}</span>
        <img src={/*task.userImage*/ "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} alt="User" className="user-image" />
      </div>
      <h4>{task.title}</h4>
      <div className="task-footer">
  <span className={`priority-icon priority-${task.priority}`}>
    {task.priority === 4 ? "Urgent" :
     task.priority === 3 ? "High" :
     task.priority === 2 ? "Medium" :
     task.priority === 1 ? "Low" : "No Priority"}
  </span>
  <span className="tag">{task.tag[0]}</span>
</div>
    </div>
  );
};

export default TaskCard;
