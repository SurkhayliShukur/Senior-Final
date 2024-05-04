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
        },
        removeFromWish: (state, action) => {
            const exist = state.wishlist.find((product) => product.id === action.payload.id)
            if (exist) {
                state.wishlist = state.wishlist.filter((product) => product.id !== action.payload.id)
                toast.success("Product is deleted successfully", {
                    autoClose: 1000,
                })
            }
        }
    }

})
export const getWishList = (state) => state.wish.wishlist
export const { addToWislist,removeFromWish } = wishlistSlice.actions
export default wishlistSlice.reducer
