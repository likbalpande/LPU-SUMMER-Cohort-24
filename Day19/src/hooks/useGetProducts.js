import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = (params = {}) => {
    const { isSearchTextDependent = true } = params;
    const { searchText } = useContext(AppContext);
    const [products, setProducts] = useState([]);

    async function getData(stx) {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${stx}`);
            const data = await res.json();
            setProducts(data.products);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    useEffect(() => {
        if (isSearchTextDependent) {
            getData(searchText);
        } else {
            getData("");
        }
    }, [searchText]);

    return products;
};

export default useGetProducts;
