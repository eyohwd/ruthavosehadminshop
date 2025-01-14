import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
    isSuccess: false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
       loginStart: (state)=>{
        state.isFetching = true;
       } ,
       loginSuccess: (state, action)=>{
        state.isFetching = false;
        state.isSuccess = true;
        state.currentUser = action.payload;
       },

       loginFailure: (state)=>{
        state.isFetching = false;
        state.error = true;
       }
    }

})

export const {loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer