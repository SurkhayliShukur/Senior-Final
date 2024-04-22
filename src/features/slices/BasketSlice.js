import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const initialState = {
    basket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    totalDiscountPrice: 0,
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const exist = state.basket.find((product) => product.id === action.payload.id)

            if (exist) {
                toast.info("Product is already in the card")

                if (exist.amount >= action.payload.stock) {
                    toast.warn("Maximum stock reached for this product!", {
                        autoClose: 1000,
                    });
                    return
                }
            }
            else {
                if (action.payload.stock === 0) {
                    toast.warn("This product is out of stock!", {
                        autoClose: 1000,
                    });
                    return;
                }
                state.basket.push(action.payload);
                state.totalAmount++
                state.totalPrice += action.payload.price
                state.totalDiscountPrice += action.payload.discountPrice
                toast.success("Product added successfully!", {
                    autoClose: 1000,
                });
            }
        }
    }
})
export default basketSlice.reducer