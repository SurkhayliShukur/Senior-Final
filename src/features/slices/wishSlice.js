import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    wishlist: []
}

export const wishlistSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        addToWislist: (state, action) => {
            const exist = state.wishlist.find((product) => product.id === action.payload.id)
            if (exist) {
                toast.info("Product is already in the card", {
                    autoClose: 1000
                })
            }
            else {
                state.wishlist.push(action.payload)
            }
        }
    }
})
export const getWishList = (state) => state.wish.wishlist
export const { addToWislist } = wishlistSlice.actions
export default wishlistSlice.reducer
