import { useEffect, useState } from "react";

const useGetProducts = (searchText = "") => {
    const [products, setProducts] = useState([]);

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return products;
};

export default useGetProducts;
