import React, { useContext } from 'react'
import { getBasket, getTotalPrice, getTotalDiscountPrice } from '../../features/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../Context/Theme'

export const Basket = () => {
    const { color } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const totalPrice = useSelector(getTotalPrice)
    const totalDiscountPrice = useSelector(getTotalDiscountPrice)

    return (
        <>
            <header className='w-100 d-flex justify-content-center align-items-center text-white bg-dark my-4'>
                <div>
                    <p className='fs-5'>TotalPrice:{totalPrice}</p>
                    <p className='fs-5 my-2'>TotalDiscountPrice:{totalDiscountPrice}</p>
                </div>
                <div>
                    <p className='fs-5 '>Sum:{totalPrice - totalDiscountPrice}</p>
                    <button className='btn btn-danger ms-4'>clear</button>
                </div>
            </header>
            <div className="d-flex justify-content-between aligin-items-center my-5 flex-wrap">
                {
                    basket?.map((product) => {
                        return (
                            <div className="card text-center " key={product.id} style={{ width: '20rem', height: 'auto', }}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className="text-secondary fs-5">title</span>
                                    <h2 className="fs-4 text-uppercase">{product.title}</h2>
                                    <span className="text-secondary fs-5">category</span>
                                    <p className="card-text">{product.category}</p>
                                    <span className="text-secondary fs-5">price</span>
                                    <p className="card-text fw-bold fs-3" style={{ color: color }}>{product.price}</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

