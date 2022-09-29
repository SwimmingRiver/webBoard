import { createSlice } from "@reduxjs/toolkit";

export let initialState =[
      [{
        name:"master",
        id:"master",
        pw:"1q2w3e",
        on:false
        },
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
        }],
        [
            {
                title:"notice",
                content:"notice",
                writer:"master",
                number:0
            },
            {
                title:"aafirst",
                content:"i'm aa",
                writer:"aa",
                number:1
            }
        ]
]


export const userInfoSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userJoin:(state,action)=>{
            state[0].push(action.payload);
            localStorage.setItem("userList",JSON.stringify(state[0]))
        },
        userLogin:(state,action)=>{
            action.payload.on = true
            state[0].splice(state.map(i=>i.id).indexOf(action.payload.id),1,action.payload);
        },
        userLogout:(state,action)=>{
            action.payload.on =false;
            state[0].splice(state.map(i=>i.id).indexOf(action.payload.id),1,action.payload);
        },
        boardPost:(state,action)=>{
            state[1].push(action.payload);
            localStorage.setItem("postList",JSON.stringify(state[1]))
        },
        boardDelete:(state,action)=>{
            state[1].splice(action.payload,1);
        },
         boardEdit:(state,action)=>{
        },
    }
})
export default userInfoSlice;