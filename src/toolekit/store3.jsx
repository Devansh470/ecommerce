import { configureStore } from "@reduxjs/toolkit";
import todoRed from "./todolist";
const store3= configureStore({
    reducer:{
       todo:todoRed
    }
})

export default store3;