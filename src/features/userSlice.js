import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    userDetails : null
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        login : (state,action) => {
            state.isLoggedIn = true,
            state.userDetails = action.payload
            localStorage.setItem("isLoggedIn", JSON.stringify(true));

        },
        logout : (state)=>{
            state.isLoggedIn = false,
            state.userDetails = null
            localStorage.removeItem("isLoggedIn");

        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer