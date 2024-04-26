import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    balance: 0
}

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        increamentBalance: (state, action) => {
            state.balance += action.payload
        },
        decrementBalance : (state, action) => {
            state.balance -= action.payload
        }
    }
})

export const {increamentBalance,decrementBalance} = walletSlice.actions
 
export default walletSlice.reducer