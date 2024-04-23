import React, { useContext } from "react"
import { useFetchProduct } from "../../assets/data"
import { ThemeContext } from "../../Context/Theme"
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from '../../features/slices/productSlice';
import { addToCard } from "../../features/slices/productSlice";


export const Card = () => {
    const { color } = useContext(ThemeContext)
    const { data } = useFetchProduct()
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)

    return (
        <>
            <div className="d-flex justify-content-between aligin-items-center my-5 flex-wrap">
                {
                    data?.map((product) => {
                        const basketExist = basket.find(
                            (exist) => exist.id === product.id
                        )
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
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            dispatch(
                                                addToCard({
                                                    ...product,
                                                    amount: 1,
                                                    totalAmount: 1,
                                                    totalPrice: product.price,
                                                    totalDiscountPrice: product.discountPrice

                                                })
                                            )
                                        }}>

                                            {
                                                basketExist ? (
                                                    <span>  <i className="bi bi-bag-check" style={{ fontSize: '24px', }}></i></span>
                                                )
                                                    : (
                                                        <span><i className="bi bi-bag-plus" style={{ fontSize: '24px', }}></i></span>
                                                    )
                                            }
                                        </button>
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