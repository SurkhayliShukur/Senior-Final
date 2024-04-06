import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { SIDEBAR_ROUTES } from '../../config';
import { Sidebar } from "../../components"
import { Dashboard, Customers } from '../../layouts';

export const App = () => {


  return (
    <div className='app'>
      <Sidebar routes={[...SIDEBAR_ROUTES]} />
      <Routes>
        {
          SIDEBAR_ROUTES.map((route, key) => {
            <Route
              path={route.path}
              element={route.element}
              key={key}
            />
          })
        }
      </Routes>
      <div className='container'>
        <div className='row'>
          <div className='col' style={{ backgroundColor: "blue" }}>
            <Dashboard />
          </div>
          {/* <div className='col' style={{ backgroundColor: "red" }}>
            <Customers />
          </div> */}
        </div>
      </div>
    </div>
  )
}