import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard, Customers, Products, Statistics } from '../../layouts';
import { Navbar, Sidebar } from "../../components"
import { ThemeContext } from '../../Context/Theme';

export const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/dashboard")
  }, [])

  const { theme, fontColor, color } = useContext(ThemeContext)

  console.log("theme", theme, "fontColor", fontColor, "color", color);

  const SIDEBAR_ROUTES = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i className="bi bi-grid" />,
      element: <Dashboard />
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <i className="bi bi-person-video" />,
      element: <Customers />
    },
    {
      path: "/products",
      name: "Products",
      icon: <i className="bi bi-box-seam" />,
      element: <Products />
    },
    {
      path: "/statistics",
      name: "Statistics",
      icon: <i className="bi bi-bar-chart" />,
      element: <Statistics />
    },
  ]

  useEffect(() => {
    const body = document.body.style
    body.background = theme
    body.color = fontColor
  }, [theme, color])

  return (
    <div className='app'>
      <Sidebar routes={SIDEBAR_ROUTES} />
      <div className='m-5 w-100'>
        <Navbar />
        <Routes>
          {
            SIDEBAR_ROUTES.map((route, key) => (
              <Route path={route.path} element={route.element} key={key} />
            ))
          }
        </Routes>
      </div>
    </div>
  )
}