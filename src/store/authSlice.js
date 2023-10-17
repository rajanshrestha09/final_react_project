

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth', //Can give any name
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true,
            state.userData = action.payload.payload
        },

        logout: (state, action) =>{
            state.status = false,
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;