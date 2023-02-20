import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login: (state, action) => { state.user = action.payload }, 
        logout: (state) => { state.user = null },
    }
})

const { login, logout } = userSlice.actions;

export default userSlice.reducer;
export { login, logout };