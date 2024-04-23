import React from 'react'
import { getBasket, getTotalPrice, getTotalDiscountPrice } from '../../features/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Basket = () => {
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const totalPrice = useSelector(getTotalPrice)
    const totalDiscountPrice = useSelector(getTotalDiscountPrice)
    return (
        <>
            <header className='w-100 d-flex justify-content-center align-items-center'>
                <div>

                </div>
            </header>
        </>
    )
}

