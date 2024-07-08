import { useEffect, useState } from "react";

const useGetProducts = (searchText = "") => {
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
