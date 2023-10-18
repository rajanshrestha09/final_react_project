import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

 const store = configureStore({
    reducer:{
        auth : authSlice,
        // Add more function
    },
})

export default store;