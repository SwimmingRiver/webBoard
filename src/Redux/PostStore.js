
import { configureStore } from '@reduxjs/toolkit';
import { initialState, postSlice } from './PostReducer';
export const postStore = configureStore({
    initialState:initialState,
    reducer:postSlice.reducer
})