import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginPage from "./src/pages/loginPage";
import SignupPage from "./src/pages/signupPage";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const { isAuthorized } = useSelector((e) => e.auth);

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
            path: "/",
            element: isAuthorized ? <h1>Home Page</h1> : <Navigate to="/login" />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
