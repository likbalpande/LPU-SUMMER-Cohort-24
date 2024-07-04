import { useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

const SearchPage = (props) => {
    const { categories } = props;
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);

    async function getData(e) {
        const val = e.target.value;
        const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("API! Called");
    }

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
