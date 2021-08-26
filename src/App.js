import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';
import TaskList from './componentes/TaskList';

const App = () => {
  const [task, setTask] = useState([]);
  const [showTaskFinished, setShowTaskFinished] = useState(false)


  return (
    <div className="contenedor">
      <Header setShowTaskFinished={setShowTaskFinished} showTaskFinished={showTaskFinished} />
      <FormTask task={task} setTask={setTask} />
      <TaskList task={task} setTask={setTask} showTaskFinished={showTaskFinished} />
    </div>
  );
}

export default App;
