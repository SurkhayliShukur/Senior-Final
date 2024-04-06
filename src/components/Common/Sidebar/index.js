import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Context/Theme';
import SeniorLogoLight from '../../../assets/images/seniorlogo_light.svg'

export const Sidebar = ({ routes }) => {

  const { theme, color, fontColor } = useContext(ThemeContext)
  
  const [expanded, setExpanded] = useState(true)
  const [active, setActive] = useState("Dashboard")

  return (
    <div className={`sidebar ${expanded && 'expanded'}`} style={{backgroundColor: theme, color: fontColor}}>
      <div className='brand'>
        {expanded && <img src={SeniorLogoLight} alt="light-logo" />}
        <button
          className='button'
          onClick={() => setExpanded(!expanded)}
          style={
            {
              backgroundColor: theme
            }
          }
        >
          {
            <i className={`bi bi-filter-${expanded === true ? "right" : "left"}`} style={{color: color}}></i>
          }

        </button>
      </div>
      <div className='navigation'>
        {
          routes.map((route, key) => (
            <Link
              onClick={()=> setActive(route.name)}
              style={{
                color: route.name === active ? color : fontColor
              }}
              className='link-btn'
              to={route.path}
              key={key}
            >
              <div className='icon' >{route.icon}</div>
              {expanded && <div className='title'>{route.name}</div>}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
