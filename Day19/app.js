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
    const [cart, setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const router = createBrowserRouter([
        {
            path: "/",
            element: !loggedInUser ? <SignUp /> : <HomePage />,
        },
        {
            path: "/search",
            element: !loggedInUser ? <SignUp /> : <SearchPage />,
        },
        {
            path: "/search/:id",
            element: !loggedInUser ? <SignUp /> : <ProductInfo />,
        },
        {
            path: "/signup",
            element: loggedInUser ? <HomePage /> : <SignUp />,
        },
        {
            path: "/login",
            element: loggedInUser ? <HomePage /> : <Login />,
        },
    ]);

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

    const appLogin = (user) => {
        setLoggedInUser(user);
    };

    const contextValues = {
        loggedInUser,
        cart,
        addToCart,
        categories,
        searchText,
        setSearchText,
        appLogin,
    };
    console.log("State", loggedInUser);
    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />;
        </AppContext.Provider>
    );
};

root.render(<App />);
