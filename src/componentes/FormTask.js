import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormTask = ({ task, changeTask }) => {
  const [inputTask, changeInputTask] = useState('');


  const handleInput = (e) => {
    changeInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    changeTask(
      [...task,
      {
        id: uuidv4(),
        text: inputTask,
        completada: true
      }
      ]
    );
  };

  return (
    <form action="" className="form-task" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-task__input"
        placeholder="Escribe una tarea"
        value={inputTask}
        onChange={(e) => handleInput(e)}
      />
      <button
        type="submit"
        className="form-task__btn"
      >
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="form-task__icon-btn" />
      </button>
    </form>

  );
}

export default FormTask;