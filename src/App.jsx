import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupToggle from './components/GroupToggle';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState({});
  const [groupBy, setGroupBy] = useState('user');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = response.data;
      console.log(data);
      setTasks(data.tickets);

      const username = data.users.reduce((acc, user) => {
        acc[user.id] = { name: user.name, available: user.available };
        return acc;
      }, {});
      setUsers(username); // Correctly setting users state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <GroupToggle setGroupBy={setGroupBy} />
      <Board tasks={tasks} groupBy={groupBy} users={users} />
    </div>
  );
};

export default App;