
import { createSlice } from '@reduxjs/toolkit';

export let initialState = [
    {
        title:"",
        content:"",
        writer:"",
    }
]


export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        submit:(state,action)=>{state.push(action.payload)}
    }
})