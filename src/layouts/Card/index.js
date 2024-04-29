import React, { useContext } from "react"
import { useFetchProduct } from "../../assets/data"
import { ThemeContext } from "../../Context/Theme"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getBasket } from '../../features/slices/productSlice';
import { addToCard } from "../../features/slices/productSlice";
import { TbShoppingCartCopy, TbShoppingCartDown } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";



export const Card = () => {
    const { color, theme } = useContext(ThemeContext)
    const { data } = useFetchProduct()
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <div className="row">
                    {data?.map((product) => {
                        const basketExist = basket?.find(
                            (exist) => exist.id === product.id
                        )
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-4" key={product.id}>
                                <div className={`card text-center shadow`} style={{backgroundColor:theme}}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-secondary fs-5">Title</h5>
                                        <h2 className="card-title fs-4 text-uppercase">{product.title}</h2>
                                        <h5 className="card-title text-secondary fs-5">Category</h5>
                                        <p className="card-text">{product.category}</p>
                                        <h5 className="card-title text-secondary fs-5">Price</h5>
                                        <p className="card-text fw-bold fs-3" style={{ color: color }}>{product.price}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button type="button" className="btn mx-2" style={{ backgroundColor: color }} onClick={() => {
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
                                                {basketExist ? (
                                                    <TbShoppingCartCopy size={32} color={"white"} />
                                                ) : (
                                                    <TbShoppingCartDown size={32} color={"white"} />
                                                )}
                                            </button>
                                            <button type="button" className="btn" style={{ backgroundColor: color }} onClick={
                                                () => navigate(`/detail/${product.id}`)
                                            }>
                                                <MdRemoveRedEye size={32} style={{ color: "white" }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </>
    )

}