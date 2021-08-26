import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';
import TaskList from './componentes/TaskList';

const App = () => {
  const [task, changeTask] = useState([]);

  return (
    <div className="contenedor">
      <Header />
      <FormTask task={task} changeTask={changeTask} />
      <TaskList task={task} />
    </div>
  );
}

export default App;
