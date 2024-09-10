import { configureStore } from "@reduxjs/toolkit";
import cntreduser from "./counterslice";

const store=configureStore({
    reducer:{
        mycounter:cntreduser
        
    }
})

export default store;