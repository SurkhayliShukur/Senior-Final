import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { getWishList, removeFromWish } from '../../features/slices/wishSlice';
import { MdDelete } from "react-icons/md";


export const Wishlist = () => {

    const { fontColor, color, theme } = useContext(ThemeContext)

    const dispatch = useDispatch()

    const wishList = useSelector(getWishList)


    return (
        <>
            <div>
                <div className='my-3 mx-3 h2'>
                    <span style={{ color: fontColor }}>Wishlist</span>
                </div>
                <div className='container'>
                    <div className='row'>
                        {
                            wishList.length > 0 ? (
                                wishList?.map((product) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-4" key={product.id} >
                                        <div className={`card text-center shadow `} style={{ backgroundColor: theme }}>
                                            <img src={product.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-secondary fs-5">Title</h5>
                                                <h2 className={`card-title fs-4 text-uppercase`} style={{ color: fontColor }}>{product.title}</h2>
                                                <h5 className="card-title text-secondary fs-5">Category</h5>
                                                <p className="card-text" style={{ color: fontColor }}>{product.category}</p>
                                                <h5 className="card-title text-secondary fs-5">Price</h5>
                                                <p className="card-text fw-bold fs-3" style={{ color: color }}>{product.price}</p>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <button
                                                        className='btn btn-danger rounded text-white mx-3'
                                                        onClick={() => dispatch(removeFromWish(product))}
                                                    >
                                                        <MdDelete size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='d-flex justify-content-center align-items-center my-4'>
                                    <h2 className=' text-danger fs-3'>Wishlist is Empty </h2>
                                </div>

                            )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}