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
    name: "products",
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
                state.totalPrice += Number(action.payload.price)
                state.totalDiscountPrice += Number(action.payload.discountPrice)
                toast.success("Product added successfully!", {
                    autoClose: 1000,
                });
            }
        },
        removerFromCard: (state, action) => {
            const exist = state.basket.find((product) => product.id === action.payload.id)
            if (exist) {
                state.basket = state.basket.find((product) => product.id !== action.payload.id)
                toast.success("Product deleted successfully!", {
                    autoClose: 1000,
                });
                state.totalAmount -= exist.amount
                state.totalPrice -= exist.totalPrice
                state.totalDiscountPrice -= exist.totalDiscountPrice;
            }
        },
        increament: (state, action) => {
            const exist = state.basket.find(
                (product) => product.id === action.payload.id
            );
            if (exist) {
                if (exist.amount >= action.payload.stock) {
                    toast.warn("Maximum stock reached for this product!", {
                        autoClose: 1000,
                    });
                    return;
                }
                exist.amount++;
                exist.totalAmount++;
                exist.totalPrice += exist.price;
                exist.totalDiscountPrice += exist.discountPrice;
                state.totalAmount++;
                state.totalDiscountPrice += exist.discountPrice;
            }
        },
        decrement: (state, action) => {
            const exist = state.basket.find(
                (product) => product.id === action.payload.id
            );
            if (exist && exist.amount > 1) {
                exist.amount--;
                exist.totalAmount--;
                exist.totalPrice -= exist.price;
                exist.totalDiscountPrice -= exist.discountPrice;
                state.totalAmount--;
                state.totalDiscountPrice -= exist.discountPrice;
            }
        },
        clearBasket: (state) => {
            state.basket = [];
            state.amount = 0;
            state.totalAmount = 0
            state.totalPrice = 0
            state.totalDiscountPrice = 0
        }
    }
})
export const getBasket = (state) => state.products.basket
export const getTotalPrice = (state) => state.products.totalPrice
export const getTotalDiscountPrice = (state) => state.products.totalDiscountPrice
export const getTotalAmount = (state) => state.products.totalAmount


export const { addToCard, clearBasket, removerFromCard, increament, decrement } = basketSlice.actions
export default basketSlice.reducer