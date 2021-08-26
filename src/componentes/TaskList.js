import React from 'react';
import Task from './Task';


const TaskList = ({ task, changeTask }) => {

  const toggleComplete = (id) => {
    changeTask(task.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      }
      return task;
    }))
  };

  const editText = (id, newText) => {
    changeTask(task.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText }
      }
      return task;
    }))
  };

  const deleteTask = (id,) => {
    changeTask(task.filter((task) => {
      if (task.id !== id) {
        return task;
      }
      return 0;
    }))
  };


  return (
    <ul className="task-list">
      {task.length > 0 ?
        task.map((task) => {
          return (< Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            editText={editText}
            deleteTask={deleteTask}
          />)
        })
        :
        <div className="task-list__msg">~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default TaskList;