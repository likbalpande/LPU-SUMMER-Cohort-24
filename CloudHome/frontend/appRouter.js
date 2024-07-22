import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginPage from "./src/pages/loginPage";
import SignupPage from "./src/pages/signupPage";
import { useSelector } from "react-redux";
import HomePage from "./src/pages/homePage";
import OtpPage from "./src/pages/otpPage";

const AppRouter = () => {
    const { isAuthorized, isEmailVerified } = useSelector((e) => e.auth);
    // const isAuthorized = true;
    // const isEmailVerified = true;

    const router = createBrowserRouter([
        {
            path: "/login",
            element: isAuthorized ? <Navigate to="/" /> : <LoginPage />,
        },
        {
            path: "/signup",
            element: isAuthorized ? <Navigate to="/" /> : <SignupPage />,
        },
        {
            path: "/otp",
            element: isAuthorized && !isEmailVerified ? <OtpPage /> : <Navigate to="/" />,
        },
        {
            path: "/",
            element: isAuthorized ? (
                <>{isEmailVerified ? <HomePage /> : <Navigate to="/otp" />}</>
            ) : (
                <Navigate to="/login" />
            ),
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
