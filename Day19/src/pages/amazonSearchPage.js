import { useState } from "react";

const SearchPage = (props) => {
    // let searchText = "";
    const [searchText, setSearchText] = useState("");
    console.log("initially: ", searchText);

    const handleSearch = (e) => {
        const val = e.target.value;
        // searchText = val;
        setSearchText(val);
    };

    const [products, setProducts] = useState([]);
    async function getData() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleSearch} />
            </div>
            <h1>The search Text is : {searchText}</h1>
            <hr />
            <button onClick={getData}>Get Data</button>
            {products.map((elem) => {
                return <p>{elem.title}</p>;
            })}
        </div>
    );
};

export default SearchPage;
