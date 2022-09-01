import { createSlice } from "@reduxjs/toolkit";

export let initialState =[
      [{
            name:"one",
            id:"one",
            pw:"1",
            on:false
        },
        {
            name:"two",
            id:"two",
            pw:"2",
            on:false
        },
        {
            name:"aa",
            id:"aa",
            pw:"aa",
            on:false,
        }],
        [
            {
                title:"",
                content:"",
                writer:"",
            }
        ]
]


export const userInfoSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userJoin:(state,action)=>{
            state[0].push(action.payload);
        },
        userLogin:(state,action)=>{
            action.payload.on = true
            
            state[0].splice(state.map(i=>i.id).indexOf(action.payload.id),1,action.payload);
        },
        boardPost:(state,action)=>{
            state[1].push(action.payload);
        }
        
    }
})
export default userInfoSlice.reducer;