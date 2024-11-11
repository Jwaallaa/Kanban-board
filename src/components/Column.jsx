import React from 'react';
import './Column.css'
import TaskCard from './TaskCard';

const Column = ({ groupKey, tasks }) => {
  return (
    <div className="column">
      <h3>{groupKey}</h3> {/* Display the grouping key */}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
