import { configureStore } from "@reduxjs/toolkit";
import colchanger from "./colorslise"

const store1=configureStore({
    reducer:{
        colorchange:colchanger

    }
})

export default store1;