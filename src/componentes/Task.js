import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {
  return (
    <li className="task-list__task">
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="task-list__icon task-list__icon-check"
      />
      <div className="task-list__text">
        {task.text}
      </div>
      <div className=" task-list__container-buttons">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list__icon task-list__icon-action"
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