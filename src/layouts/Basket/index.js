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
import { increamentBalance, decrementBalance } from '../../features/slices/walletSlice';
import { toast } from "react-toastify"

export const Basket = () => {
    const { color } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const totalPrice = useSelector(getTotalPrice)
    const totalDiscountPrice = useSelector(getTotalDiscountPrice)
    const wallet = useSelector(getWallet)
    const [amounth, setAmounth] = useState(0);

    console.log("totalPrice",  totalPrice)
    console.log("totalDiscountPrice",  totalDiscountPrice)



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
                <input
                    type="text"
                    placeholder="Balance"
                    value={amounth}
                    onChange={(e) => setAmounth(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch(
                        increamentBalance(Number(amounth)),
                        setAmounth("")
                    )}
                >
                    Add Amounth
                </button>
                <div className=''>
                    <span>  <FaWallet className='mx-4' size={30} /></span>
                    {wallet}
                </div>
            </div>
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
                                        <button
                                            onClick={() => dispatch(increament(product))}
                                            className='btn btn-success rounded text-white mx-3 '>
                                            <LuPlus size={20} />
                                        </button>
                                        <p className='mb-2'>
                                            {product.amount}
                                        </p>
                                        <button
                                            onClick={() => dispatch(decrement(product))}
                                            className='btn btn-danger rounded text-white mx-3'>
                                            <LuMinus size={20} />
                                        </button>
                                        <div className='d-flex mx-3'>
                                            <button
                                                onClick={() => dispatch(removeFromCart(product))}
                                                className='btn btn-danger rounded text-white mx-3'>
                                                Delete
                                            </button>
                                        </div>
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

