import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";
import AppRouter from "./appRouter";
import "./globalStyles.css";

const App = () => {
    return (
        <Provider store={appStore}>
            <AppRouter />
        </Provider>
    );
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());
