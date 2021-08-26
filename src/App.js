import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';
import TaskList from './componentes/TaskList';

const App = () => {
  const taskSaved = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
  const showTaskFinishedSaved = localStorage.getItem('taskShow') ? JSON.parse(localStorage.getItem('taskShow')) : false;


  const [task, setTask] = useState(taskSaved);
  const [showTaskFinished, setShowTaskFinished] = useState(showTaskFinishedSaved);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task))
  }, [task])

  useEffect(() => {
    localStorage.setItem('taskShow', JSON.stringify(showTaskFinished))
  }, [showTaskFinished])


  return (
    <div className="contenedor">
      <Header setShowTaskFinished={setShowTaskFinished} showTaskFinished={showTaskFinished} />
      <FormTask task={task} setTask={setTask} />
      <TaskList task={task} setTask={setTask} showTaskFinished={showTaskFinished} />
    </div>
  );
}

export default App;
