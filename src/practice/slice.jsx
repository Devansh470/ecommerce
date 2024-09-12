import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"list",
    initialState:{
        todo:[]
    },
    reducers:{
        addtask:(state, action)=>{
            state.todo.push(action.payload)
            console.log(state.todo)
        }
    }
})

export default slice.reducer
export const {addtask}=slice.actions
