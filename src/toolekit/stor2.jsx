import { configureStore } from "@reduxjs/toolkit"
import colorreduser from "./entercolor"

const store2=configureStore({
    reducer:{
        bgcolor:colorreduser

    }
})

export default store2;