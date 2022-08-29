import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice,initialState } from "./UserReducer";

export const userStore = configureStore({
    initialState:initialState,
    reducer:userInfoSlice.reducer,
});