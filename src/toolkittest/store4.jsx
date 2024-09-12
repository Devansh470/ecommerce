import { configureStore } from "@reduxjs/toolkit";
import con from "./slise"
const store4=configureStore({
    reducer:{
        counter:con
        
    }
})

export default store4;