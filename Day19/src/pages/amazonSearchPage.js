import { useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

const SearchPage = (props) => {
    const { categories } = props;
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchText(val);
    };

    return (
        <>
            <Navbar setProducts={setProducts} />
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
