import { createSlice } from "@reduxjs/toolkit";

const slise=createSlice({
    name:"counter",
    initialState:{
        count:0,
        color:"red",
        todo:[]
    },
    reducers:{
        inccounter:(state)=>{
            state.count=state.count+10
        },
        deccounter:(state)=>{
            if(state.count!=0)
            {
                state.count=state.count-10
            }
            else
            {
                alert("you can not less then 0")
            }
        },
        colorchange:(state , actions)=>{
            console.log(actions.payload)
            state.color=actions.payload;
        },
        addtodo:(state, actions)=>{
            state.todo.push(actions.payload);
        },
        recdelete:(state, actions)=>{
           state.todo=state.todo.filter(item => item.id!=actions.payload);
        },
        todocomplete:(state, actions)=>{
            for (var i=0; i<state.todo.length; i++)
            {
               if (state.todo[i].id==actions.payload)
               {
                 state.todo[i].status=true;
               }
            }
        },
        todouncomplete:(state, actions)=>{
            for (var i=0; i<state.todo.length; i++)
                {
                   if (state.todo[i].id==actions.payload)
                   {
                     state.todo[i].status=false;
                   }
                }
        },
    
        editdataSave:(state, actions)=>{
            for (var i=0; i<state.todo.length; i++)
            {
                if (state.todo[i].id==actions.payload.id)
                {
                    state.todo[i].data=actions.payload.data;
                }
            }
        }

    }
})

export default slise.reducer
export const {inccounter,deccounter,colorchange,addtodo,recdelete,todocomplete,todouncomplete,editdataSave}=slise.actions;
