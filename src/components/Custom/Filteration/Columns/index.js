import React, { useContext } from 'react';
import { ThemeContext } from '../../../../Context/Theme';

export const Columns = ({ options, handleCheckbox }) => {

  const { color, theme, fontColor } = useContext(ThemeContext)

  return (
    <div className="btn-group">
      <button
        className="btn dropdown-toggle border rounded"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        style={{ color: fontColor }}
      >
        <span className="bi bi-columns"> Columns</span>
      </button>
      <ul className="dropdown-menu" style={{ backgroundColor: theme, color: fontColor }}>
        {options.map((option, index) => (
          index === 2 ? <li key={index}>
          <a className="dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              id={`flexCheck${option.name}`}
              onChange={() => { handleCheckbox(index, !option.value) }}
              checked={option.value}
              disabled
            />
            <label
              className="form-check-label ps-2 w-100"
              htmlFor={`flexCheck${option.name}`}
              style={{ color: fontColor }}
            >
              {option.name.toUpperCase()}
            </label>
          </a>
        </li> : <li key={index}>
            <a className="dropdown-item">
              <input
                className="form-check-input"
                type="checkbox"
                id={`flexCheck${option.name}`}
                onChange={() => { handleCheckbox(index, !option.value) }}
                checked={option.value}
              />
              <label
                className="form-check-label ps-2 w-100"
                htmlFor={`flexCheck${option.name}`}
                style={{ color: fontColor }}
              >
                {option.name.toUpperCase()}
              </label>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};