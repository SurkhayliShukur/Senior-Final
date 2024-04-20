import { combineReducers } from "@reduxjs/toolkit";
import basket from "../slices/BasketSlice"

const rootReducer = combineReducers({
    basket,
})
export default rootReducer