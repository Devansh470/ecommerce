import { configureStore } from "@reduxjs/toolkit";
import todolist from "./slice"
const store=configureStore({
    reducer:{
        list:todolist
    }
})
export default store;