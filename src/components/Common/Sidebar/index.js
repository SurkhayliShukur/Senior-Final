import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SeniorLogoLight from '../../../assets/images/seniorlogo_light.svg'

export const Sidebar = ({ routes }) => {

  const [ expanded, setExpanded ] = useState(true)

  return (
    <div className={`sidebar ${expanded && 'expanded'}`}>
      <div className='brand'>
        {expanded && <img src={SeniorLogoLight} alt="light-logo"/>}
        <button 
          className='button'
          onClick={() => setExpanded(!expanded)}
          >
          <i className="bi bi-filter-right"></i>
        </button>
      </div>
      <div className='navigation'>
        {
          routes.map((route, key) => (
            <Link
              className='link-btn'
              to={route.path}
              key={key}
            >
              <div className='icon'>{route.icon}</div>
              {expanded && <div className='title'>{route.name}</div>}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
