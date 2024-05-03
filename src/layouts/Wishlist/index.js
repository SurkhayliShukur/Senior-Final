import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../../features/slices/wishSlice';


export const Wishlist = () => {

    const { fontColor } = useContext(ThemeContext)

    const wishList = useSelector(getWishList)

    console.log(wishList)


    return (
        <>
            <div>
                <div className='my-3 mx-3 h2'>
                    <span style={{ color: fontColor }}>Wishlist</span>
                </div>
            </div>
        </>
    )
}