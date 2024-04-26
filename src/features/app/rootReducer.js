import { combineReducers } from "@reduxjs/toolkit";
import products from "../slices/productSlice";
import wallet from "../slices/walletSlice"


const rootReducer = combineReducers({
    products,
    wallet
})
export default rootReducer