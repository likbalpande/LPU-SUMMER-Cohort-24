import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    // if there is any error in JSON.parse --> app will crash
    // need to handle it in a proper way
    initialState: {
        isAuthorized: localStorage.getItem("userInfo") ? true : false,
        email: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).user.email : null,
        name: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).user.name : null,
        userId: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).user._id : null,
        token: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : null,
        isEmailVerified: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo")).user.isEmailVerified
            : false,
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
            state.email = null;
            state.name = null;
            state.token = null;
            state.isEmailVerified = false;
            localStorage.removeItem("userInfo");
        },
        emailVerified: (state) => {
            state.isEmailVerified = true;
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    user: {
                        email: state.email,
                        name: state.name,
                        isEmailVerified: state.isEmailVerified,
                        _id: state.userId,
                    },
                    token: state.token,
                })
            );
        },
    },
});

export const { appLogin, appLogout, emailVerified } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
