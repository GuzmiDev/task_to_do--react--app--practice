import React from 'react';
import Task from './Task';

const TaskList = ({ task }) => {
  return (
    <ul className="task-list">
      {task.length > 0 ?
        task.map((task) => {
          return (< Task
            key={task.id}
            task={task}
          />)
        })
        :
        <div className="task-list__msg">~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default TaskList;