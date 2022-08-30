import { createSlice } from "@reduxjs/toolkit";

export let initialState =[
        {
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
        }
]


export const userInfoSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userJoin:(state,action)=>{
            state.push(action.payload);
        },
        userLogin:(state,action)=>{
            state.on =true;
        }
    }
})
export default userInfoSlice.reducer;