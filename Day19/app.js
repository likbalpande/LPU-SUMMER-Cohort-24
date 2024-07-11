import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import SignUp from "./src/pages/signUp";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";
import Login from "./src/pages/login";

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
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    const [cart, setCart] = useState([]);
    const addToCart = (elem) => {
        console.log(elem);
        const isPresent = cart.findIndex((cI) => cI.id === elem.id);
        if (isPresent === -1) {
            const newCart = [...cart];
            newCart.push({
                title: elem.title,
                id: elem.id,
                price: elem.price,
                count: 1,
            });
            setCart(newCart);
        } else {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === elem.id) {
                    const newCartItem = { ...cartItem };
                    newCartItem.count = newCartItem.count + 1;
                    return newCartItem;
                } else return cartItem;
            });
            setCart(newCart);
        }
    };

    const contextValues = {
        cart,
        addToCart,
        categories,
        searchText,
        setSearchText,
    };
    console.log(cart);
    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />;
        </AppContext.Provider>
    );
};

root.render(<App />);
