import React from 'react'
import { Profile, Tools } from '../../../components'

export const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center w-100'>
      <Profile />
      <Tools />
    </div>
  )
}