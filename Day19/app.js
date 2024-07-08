import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];

const App = () => {
    const [searchText, setSearchText] = useState("");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/search/:id",
            element: <ProductInfo />,
        },
    ]);

    const contextValues = {
        categories,
        searchText,
        setSearchText,
    };

    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />;
        </AppContext.Provider>
    );
};

root.render(<App />);
