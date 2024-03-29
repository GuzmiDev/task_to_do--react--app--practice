import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormTask = ({ task, setTask, }) => {
  const [inputTask, setInputTask] = useState('');


  const handleInput = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask(
      [...task,
      {
        id: uuidv4(),
        text: inputTask,
        complete: false
      }
      ]
    );
    setInputTask('');
  };

  return (
    <form id="form-task" action="" className="form-task" onSubmit={handleSubmit}>
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