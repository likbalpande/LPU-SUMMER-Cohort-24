import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import useGetProductById from "../hooks/useGetProductById";

const ProductInfo = ({ setSearchText }) => {
    const params = useParams();

    const productInfo = useGetProductById(params.id);

    const openSearchPage = () => {
        navigate("/search");
    };

    return (
        <div>
            <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
            <h1>{productInfo.title}</h1>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {productInfo?.images?.map((imgLink) => {
                    return <img src={`${imgLink}`} height="200px" />;
                })}
            </div>
        </div>
    );
};

export default ProductInfo;
