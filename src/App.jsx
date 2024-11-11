import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupToggle from './components/GroupToggle';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState({});
  const [groupBy, setGroupBy] = useState('user');
  const [sortBy, setSortBy] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = response.data;
      setTasks(data.tickets);
      const username = data.users.reduce((acc, user) => {
        acc[user.id] = { name: user.name, available: user.available };
        return acc;
      }, {});
      setUsers(username);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="app">
      <div className='header'></div>
      <button className="display-btn" onClick={toggleOptions}>Display Options</button>
      {showOptions && (
        <div className="options-popup">
          <GroupToggle setGroupBy={setGroupBy} setSortBy={setSortBy} />
        </div>
      )}
      <Board tasks={tasks} groupBy={groupBy} users={users} sortBy={sortBy} />
    </div>
  );
};

export default App;
