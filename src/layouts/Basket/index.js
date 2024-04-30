import React, { useContext, useState } from 'react'
import {
    getBasket,
    getTotalPrice,
    getTotalDiscountPrice,
} from '../../features/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../Context/Theme'
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import {
    clearBasket,
    increament,
    decrement,
    removeFromCart
} from "../../features/slices/productSlice"
import { getWallet } from '../../features/slices/walletSlice';
import { decrementBalance } from '../../features/slices/walletSlice';
import { toast } from "react-toastify"
import { AddAmount } from '../../components';

export const Basket = () => {
    const { color, theme, fontColor } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const totalPrice = useSelector(getTotalPrice)
    const totalDiscountPrice = useSelector(getTotalDiscountPrice)
    const wallet = useSelector(getWallet)
    const [modalShow, setModalShow] = useState(false)


    const handlePayment = () => {
        if (wallet >= totalPrice) {
            dispatch(decrementBalance(totalPrice));
            dispatch(clearBasket())

        } else {
            toast.warning("Balance is not enough", {
                autoClose: 1000
            })
        }
    };


    return (
        <>
            <h1>
                Basket
            </h1>
            <AddAmount
                modalShow={modalShow}
                onHide={() => setModalShow(false)}
            />
            <header className='w-100 d-flex justify-content-center align-items-center  text-white bg-dark my-4'>
                <div>
                    <p className='fs-5'>TotalPrice: {totalPrice}</p>
                    <p className='fs-5 my-2'>TotalDiscountPrice: {totalDiscountPrice}</p>
                </div>

                <div>
                    <p className='fs-5 '>Sum: {totalPrice - totalDiscountPrice}</p>
                    <button
                        className='btn btn-danger mb-2 ms-4'
                        onClick={() => {
                            dispatch(clearBasket())
                        }}
                    >clear</button>
                    <button
                        className="btn  btn-warning text-white ms-2 mb-2"
                        onClick={handlePayment}
                    >
                        <span>Pay </span>
                    </button>
                </div>
            </header>
            <div className='d-flex justify-content-between align-items-center bg-body-secondary w-100 shadow p-3'>
                <div>
                    <button
                        className='btn'
                        onClick={() => setModalShow(true)}
                        style={{
                            backgroundColor: color,
                            color: "white"
                        }}

                    >
                        <i class="bi bi-plus-lg"></i>
                    </button>
                </div>
                <div className=''>
                    <span>  <FaWallet className='mx-4' size={30} /></span>
                    {wallet}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {basket?.map((product) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-4" key={product.id} >
                            <div className={`card text-center shadow `} style={{ backgroundColor: theme }}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary fs-5">Title</h5>
                                    <h2 className={`card-title fs-4 text-uppercase`} >{product.title}</h2>
                                    <h5 className="card-title text-secondary fs-5">Category</h5>
                                    <p className="card-text">{product.category}</p>
                                    <h5 className="card-title text-secondary fs-5">Price</h5>
                                    <p className="card-text fw-bold fs-3" style={{ color: color }}>{product.price}</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button onClick={() => dispatch(increament(product))} className="btn btn-success rounded text-white mx-3">
                                            <LuPlus size={20} />
                                        </button>
                                        <p className="mb-2">{product.amount}</p>
                                        <button onClick={() => dispatch(decrement(product))} className="btn btn-danger rounded text-white mx-3">
                                            <LuMinus size={20} />
                                        </button>
                                        <button onClick={() => dispatch(removeFromCart(product))} className="btn btn-danger rounded text-white mx-3">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

