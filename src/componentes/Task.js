import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {

  const [editTask, changeEditTask] = useState(false);
  const [newTask, changeNewTask] = useState(task.text)

  const handleSubmit = (e) => {
    e.preventDefault();

    task.text = newTask;
    changeEditTask(!editTask);
  };

  return (
    <li className="task-list__task">
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="task-list__icon task-list__icon-check"
      />
      <div className="task-list__text">
        {editTask ?
          <form action="" className="form-edit-task" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-edit-task__input"
              value={newTask}
              onChange={(e) => changeNewTask(e.target.value)}
            />
            <button
              type="submit"
              className="form-edit-task__btn"
            >Actualizar</button>
          </form>
          :
          task.text
        }
      </div>
      <div className=" task-list__container-buttons">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list__icon task-list__icon-action"
          onClick={() => changeEditTask(!editTask)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="task-list__icon task-list__icon-action"
        />
      </div>
    </li>
  );
}

export default Task;