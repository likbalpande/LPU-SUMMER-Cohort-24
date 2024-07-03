import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductInfoCard from "../components/productInfoCard";

const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];

const productInfoCards = [
    {
        id: 1,
        title: "Revamp",
        products: [
            {
                title: "Cushion",
                img: "https://www.abc.com",
            },
        ],
    },
];

const HomePage = () => {
    return (
        <div className="homepage-root-container">
            <nav className="homepage-nav">
                <h4>Amazon.in</h4>
                <p>
                    Address:
                    <br />
                    LPU University
                </p>
                <div className="homepage-search-container">
                    <select />
                    <input />
                    <button>
                        <IoSearchSharp />
                    </button>
                </div>
                <h5>Profile</h5>
                <h5>Cart</h5>
            </nav>
            <div className="homepage-category-bar">
                <button>
                    <RxHamburgerMenu />
                    All
                </button>
                <div className="category-items">
                    {categories.map((elem) => {
                        return <p key={elem}>{elem}</p>;
                    })}
                </div>
            </div>
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
                <div className="products-cards-container">
                    {productInfoCards.map((elem) => {
                        return <ProductInfoCard title={elem.title} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
