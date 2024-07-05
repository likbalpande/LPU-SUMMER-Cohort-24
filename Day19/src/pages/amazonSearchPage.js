import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

const SearchPage = (props) => {
    const { categories, searchText, setSearchText } = props;
    const [products, setProducts] = useState([]);

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar categories={categories} />
            <div>
                {products.map((elem) => {
                    return <p key={elem.id}>{elem.title}</p>;
                })}
            </div>
        </>
    );
};

export default SearchPage;
