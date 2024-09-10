import { createSlice } from "@reduxjs/toolkit";

const colerslise=createSlice({
    name:"colorchange",
    initialState:{
        color:"pink"
    },
    reducers:{
        changecolor:(state)=>{
            state.color="lightblue";
        }
    }
})
export default colerslise.reducer;
export const {changecolor}=colerslise.actions;
