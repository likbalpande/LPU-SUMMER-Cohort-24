import { useContext } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
    const { categories } = props;
    const products = useGetProducts();
    const { addToCart } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <CategoryBar categories={categories} />
            <div>
                {products.map((elem) => {
                    return (
                        <div style={{ width: "400px", backgroundColor: "yellow", margin: "24px auto" }}>
                            <h2 key={elem.id}>{elem.title}</h2>
                            <button
                                onClick={() => {
                                    addToCart(elem);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SearchPage;
