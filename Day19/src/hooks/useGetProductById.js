import { useEffect, useState } from "react";

const useGetProductById = (id) => {
    const [productInfo, setProductInfo] = useState({});

    const getProductById = async () => {
        try {
            const res = await fetch(`
                https://dummyjson.com/products/${id}
            `);
            const data = await res.json();
            setProductInfo(data);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    };

    useEffect(() => {
        getProductById();
    }, []);

    return productInfo;
};

export default useGetProductById;
