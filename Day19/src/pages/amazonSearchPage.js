import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";

const SearchPage = (props) => {
    const { categories } = props;
    const products = useGetProducts();

    return (
        <>
            <Navbar />
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
