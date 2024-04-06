import React from 'react'
import { Limit } from './Limit'
import { Pages } from './Pages'

export const Pagination = ({...props}) => {
  return (
    <div className='d-flex justify-content-between w-100'>
        <Limit {...props} />
        <Pages {...props} />
    </div>
  )
}
