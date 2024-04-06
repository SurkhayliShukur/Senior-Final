import React from 'react'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='navbar'>
        <div className='profile'>
          <div>
            <img src='' alt='' />
            <p>Mike Tyson</p>
          </div>
        </div>
        <div className='changes'>

        </div>
      </div>
      <div class="dropdown">
        <div  type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p>Mike Tyson</p>
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  )
}