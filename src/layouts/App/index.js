import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import { Dashboard, Customers, Products, Statistics, Basket, Card } from '../../layouts';
import { Navbar, Sidebar } from "../../components"
import { ThemeContext } from '../../Context/Theme';
import { ToastContainer } from "react-toastify"
import Add from '../../components/Custom/Add';
import { Edit } from '../../components/Custom/Edit';
import { Detail } from '../../layouts';


export const App = () => {
  // const navigate = useNavigate()



  // useEffect(() => {
  //   navigate("/dashboard")
  // }, [])

  const { theme, fontColor, color } = useContext(ThemeContext)

  console.log("theme", theme, "fontColor", fontColor, "color", color);

  const SIDEBAR_ROUTES = [
    {
      path: "/",
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
      path: "/products-list",
      name: "Products-List",
      icon: <i className="bi bi-table"></i>,
      element: <Products />
    },
    {
      path: "/statistics",
      name: "Statistics",
      icon: <i className="bi bi-bar-chart" />,
      element: <Statistics />
    },
    {
      path: "/products",
      name: "Product",
      icon: <i className="bi bi-box"></i>,
      element: <Card />
    },
    {
      path: "/basket",
      name: "Basket",
      icon: <i className="bi bi-basket3"></i>,
      element: <Basket />
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
          <Route path="/add" exact={true} element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  )
}