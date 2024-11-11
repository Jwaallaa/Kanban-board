import React from 'react';
import TaskCard from './TaskCard';
import './Board.css';

const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority"
};

const Board = ({ tasks, groupBy, users, sortBy }) => {
  const groupedTasks = tasks.reduce((groups, task) => {
    const key =
      groupBy === 'user'
        ? users[task.userId].name
        : groupBy === 'status'
        ? task.status
        : priorityLabels[task.priority];
    if (!groups[key]) groups[key] = [];
    groups[key].push(task);
    return groups;
  }, {});

  const sortTasks = (tasks) => {
    if (sortBy === 'priority') {
      return [...tasks].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tasks;
  };

  return (
    <div className="board">
      {Object.entries(groupedTasks).map(([key, tasks]) => (
        <div key={key} className="column">
          <h3>{key}</h3>
          {groupBy === 'user' && (
            <span
              className="user-status"
              style={{
                color: users[tasks.find((task) => users[task.userId].name === key).userId].available
                  ? 'green'
                  : 'grey',
              }}
            >
              {users[tasks.find((task) => users[task.userId].name === key).userId].available
                ? 'Available'
                : 'Not Available'}
            </span>
          )}
          {sortTasks(tasks).map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
