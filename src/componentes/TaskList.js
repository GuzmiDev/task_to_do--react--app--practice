import React from 'react';
import Task from './Task';


const TaskList = ({ task, setTask, showTaskFinished }) => {

  const toggleComplete = (id) => {
    setTask(task.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      }
      return task;
    }))
  };

  const editText = (id, newText) => {
    setTask(task.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText }
      }
      return task;
    }))
  };

  const deleteTask = (id,) => {
    setTask(task.filter((task) => {
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
          if (showTaskFinished) {
            return (< Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editText={editText}
              deleteTask={deleteTask}
            />)
          } else if (!task.complete) {
            return (< Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editText={editText}
              deleteTask={deleteTask}
            />)
          }
          return '';
        })
        :
        <div className="task-list__msg">~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default TaskList;