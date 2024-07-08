import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = () => {
    const { searchText } = useContext(AppContext);
    const [products, setProducts] = useState([]);

    async function getData() {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const data = await res.json();
            setProducts(data.products);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return products;
};

export default useGetProducts;
