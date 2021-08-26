import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showTaskFinished, setShowTaskFinished }) => {
  return (
    <header className="header">
      <h1 className="header__title">Lista de Tareas</h1>
      {showTaskFinished ?
        <button className="header__button" onClick={() => setShowTaskFinished(!showTaskFinished)}>No     mostrar completadas
          <FontAwesomeIcon icon={showTaskFinished ? faEye : faEyeSlash} className="header__icon-button"></FontAwesomeIcon>
        </button>
        :
        <button className="header__button" onClick={() => setShowTaskFinished(!showTaskFinished)}>    Mostrar completadas
          <FontAwesomeIcon icon={showTaskFinished ? faEye : faEyeSlash} className="header__icon-button"></FontAwesomeIcon>
        </button>
      }
    </header>
  );
}

export default Header;