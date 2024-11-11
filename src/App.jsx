import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupToggle from './components/GroupToggle';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [groupBy, setGroupBy] = useState('user');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const responce = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = responce.data;
        console.log(data)
        setTasks(data.tickets);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <GroupToggle setGroupBy={setGroupBy} />
      <Board tasks={tasks} groupBy={groupBy} />
    </div>
  );
};

export default App;
