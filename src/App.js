import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';

const App = () => {
  const [task, changeTask] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Lavar la casa',
        completada: true
      },
    ]
  );

  return (
    <div className="contenedor">
      <Header />
      <FormTask task={task} changeTask={changeTask} />
    </div>
  );
}

export default App;
