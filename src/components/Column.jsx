import React from 'react';
import './Column.css'
import TaskCard from './TaskCard';

const Column = ({ userName, tasks }) => {
  return (
    <div className="column">
      <h2>{userName}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
