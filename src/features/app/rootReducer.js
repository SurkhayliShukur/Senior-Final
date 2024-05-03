import { combineReducers } from "@reduxjs/toolkit";
import products from "../slices/productSlice";
import wallet from "../slices/walletSlice"
import wish from "../slices/wishSlice";


const rootReducer = combineReducers({
    products,
    wallet,
    wish
})
export default rootReducer