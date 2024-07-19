import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthorized: false,
        email: null,
        name: null,
        token: null,
        isEmailVerified: false,
    },
    reducers: {
        appLogin: (state, action) => {
            console.log("action:", action);
            const { payload } = action;
            const { data } = payload;
            const { token, user } = data;
            state.isAuthorized = true;
            state.email = user.email; // action.payload.data.user.email
            state.name = user.name; // action.payload.data.user.name
            state.token = token; // action.payload.data.token
            state.isEmailVerified = user.isEmailVerified; // action.payload.data.user.isEmailVerified
            localStorage.setItem("userInfo", JSON.stringify(data));
        },
        appLogout: (state) => {
            state.isAuthorized = false;
        },
    },
});

export const { appLogin, appLogout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
