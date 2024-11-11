import React from 'react';
import TaskCard from './TaskCard';
import './Board.css';

const Board = ({ tasks, groupBy }) => {
  const groupedTasks = tasks.reduce((groups, task) => {
    const key = groupBy === 'user' ? task.userId : task.status;
    if (!groups[key]) groups[key] = [];
    groups[key].push(task);
    return groups;
  }, {});

  return (
    <div className="board">
      {Object.entries(groupedTasks).map(([key, tasks]) => (
        <div key={key} className="column">
          <h3>{key}</h3>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
