import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../../features/slices/wishSlice';
export const Wishlist = () => {

    const wishList = useSelector(getWishList)

    console.log(wishList)


    return (
        <>
            <div>
                Wishlist
            </div>
        </>
    )
}