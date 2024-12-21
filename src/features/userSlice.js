import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    userDetails : JSON.parse(localStorage.getItem("user"))||null
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        login : (state,action) => {
            state.isLoggedIn = true,
            state.userDetails = action.payload
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            localStorage.setItem("user",JSON.stringify(state.userDetails))

        },
        logout : (state)=>{
            state.isLoggedIn = false,
            state.userDetails = null
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user")
            

        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer