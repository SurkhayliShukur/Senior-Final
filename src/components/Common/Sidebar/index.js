import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Context/Theme';
import SeniorLogoLight from '../../../assets/images/seniorlogo_light.svg'
import { useSelector } from 'react-redux';
import { getBasket } from '../../../features/slices/productSlice';

export const Sidebar = ({ routes }) => {

  const { theme, color, fontColor } = useContext(ThemeContext)

  const [expanded, setExpanded] = useState(true)
  const [active, setActive] = useState("Dashboard")
  const basket = useSelector(getBasket)

  return (
    <div className={`sidebar ${expanded && 'expanded'}`} style={{ backgroundColor: theme, color: fontColor }}>
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
            <i className={`bi bi-filter-${expanded === true ? "right" : "left"}`} style={{ color: color }}></i>
          }

        </button>
      </div>
      <div className='navigation'>
        {
          routes.map((route, key) => (
            <Link
              onClick={() => setActive(route.name)}
              style={{
                color: route.name === active ? color : fontColor
              }}
              className='link-btn'
              to={route.path}
              key={key}
            >
              <div className='icon position-relative' >
                {route.icon}
                {route.path === "/basket" && ( // Check if the path is "/basket"
                  <span style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "-9%",
                    left: "60%",
                    fontSize: "11px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    textAlign:'center'
                  }}>
                    {basket.length}
                  </span>
                )}
              </div>
              {expanded && <div className='title'>{route.name}</div>}

            </Link>
          ))
        }
      </div>
    </div>
  )
}
