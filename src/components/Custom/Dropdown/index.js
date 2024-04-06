import React, { useContext } from 'react';
import { ThemeContext } from '../../../Context/Theme';

export const Dropdown = ({ title, heading, options }) => {

  const { color, theme, fontColor } = useContext(ThemeContext)

  return (
    <div className="dropdown me-2">
      <button className="border-0 m-0 p-0 h4" data-bs-toggle="dropdown" aria-expanded="false" title={title} style={{backgroundColor: theme, color: fontColor}}>
        {heading}
        {title === "Notifications" && !!options.length && (
          <span style={{
            width: "24px",
            height: "24px",
            position: "absolute",
            top: "-30%",
            left: "30%",
            fontSize: "16px",
            borderRadius: "50%",
            backgroundColor: color,
            color: fontColor
          }}>
            {options.length}
          </span>
        )}
      </button>
      <ul className="dropdown-menu" style={{ minWidth: "80px", padding: "10px", backgroundColor: theme }}>
        {options.map((option, key) => (
          <li key={key}>
            <button className="dropdown-item rounded" onClick={null} style={{color: fontColor}} >
              {option.icon} {option.title}
            </button>
          </li>
        ))}
        {title === "Notifications" && (
          <div className="d-flex justify-content-center">
            <button className="btn btn-link text-decoration-none">View All</button>
          </div>
        )}
      </ul>
    </div>
  )
}