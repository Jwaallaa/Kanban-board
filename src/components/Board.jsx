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
const Board = ({ tasks, groupBy , users }) => {

  const groupedTasks = tasks.reduce((groups, task) => {
    const key = groupBy === 'user' ? users[task.userId].name :
                groupBy === 'status' ? task.status :
                priorityLabels[task.priority];
    if (!groups[key]) groups[key] = [];
    groups[key].push(task);
    return groups;
  }, {});

  return (
    <div className="board">
      {Object.entries(groupedTasks).map(([key, tasks]) => (
        <div key={key} className="column">
          <h3>{key}
          {groupBy === "user" && (
              <span className='user' >
                <span
                  style={{
                    backgroundColor: userMap[tasks.find(task => userMap[task.userId].name === key).userId].available ? "green" : "grey"
                    
                  }}
                ></span>
                {userMap[tasks.find(task => userMap[task.userId].name === key).userId].available ? "Available" : "Not Available"}
              </span>
            )}
          </h3>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
