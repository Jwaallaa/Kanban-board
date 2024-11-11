import React from 'react';
import './Column.css'
import TaskCard from './TaskCard';

const Column = ({ groupKey, tasks }) => {
  return (
    <div className="column">
      <h2>{groupKey}</h2> {/* Display the grouping key */}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
