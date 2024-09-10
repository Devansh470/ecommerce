import { createSlice } from "@reduxjs/toolkit";

const entercolor=createSlice({
    name:"bgcolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        colorchange:(state , actions)=>{
            console.log(actions.payload)
            state.color=actions.payload;
        }
    }
})

export default entercolor.reducer;
export const {colorchange}=entercolor.actions;