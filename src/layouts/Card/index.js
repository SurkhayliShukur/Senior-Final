import React, { useContext, useState } from "react"
import { useFetchProduct } from "../../assets/data"
import { ThemeContext } from "../../Context/Theme"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getBasket } from '../../features/slices/productSlice';
import { addToCard } from "../../features/slices/productSlice";
import { TbShoppingCartCopy, TbShoppingCartDown } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";



export const Card = () => {
    const { color, theme, fontColor } = useContext(ThemeContext)
    const { data } = useFetchProduct()
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    const navigate = useNavigate()
    const [search, setSearch] = useState("")


    const filterData = data.filter((product) => {
        const filterValue = search.toLowerCase()
        return (
            product.title.toLowerCase().includes(filterValue) ||
            product.category.toLowerCase().includes(filterValue)
        )
    })

    return (
        <div>
            <div className='my-3 mx-3 h2'>
                <span style={{ color: fontColor }}>Products</span>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
                <input
                    type="text"
                    placeholder="Filter Products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control rounded-pill border-secondary"
                    style={{ maxWidth: "300px", color:fontColor,backgroundColor:theme }} // Adjust width if needed
                />
            </div>
            <div className="container">
                <div className="row">
                    {filterData?.map((product) => {
                        const basketExist = basket?.find(
                            (exist) => exist.id === product.id
                        )
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-4" key={product.id}>
                                <div className={`card text-center shadow`} style={{ backgroundColor: theme }}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-secondary fs-5">Title</h5>
                                        <h2 className="card-title fs-4 text-uppercase" style={{ color: fontColor }}>{product.title}</h2>
                                        <h5 className="card-title text-secondary fs-5">Category</h5>
                                        <p className="card-text" style={{ color: fontColor }}>{product.category}</p>
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



        </div>
    )

}